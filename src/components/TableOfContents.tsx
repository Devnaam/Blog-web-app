
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Parse headings from content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const headings = tempDiv.querySelectorAll('h2, h3');
    
    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      return {
        id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      };
    });
    
    setTocItems(items);

    // Update the actual DOM headings
    const actualHeadings = document.querySelectorAll('h2, h3');
    actualHeadings.forEach((heading, index) => {
      heading.id = `heading-${index}`;
    });
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <>
      {/* Desktop TOC */}
      <div className="hidden lg:block sticky top-8">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-[#0D1B2A] mb-4 flex items-center">
              <List className="w-4 h-4 mr-2" />
              Table of Contents
            </h3>
            <ul className="space-y-2 text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={cn(
                      "text-left w-full py-1 px-2 rounded transition-colors hover:bg-gray-100",
                      item.level === 3 && "ml-4",
                      activeId === item.id && "bg-[#F4B400]/20 text-[#0D1B2A] font-medium"
                    )}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Mobile TOC */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <span className="flex items-center">
            <List className="w-4 h-4 mr-2" />
            Table of Contents
          </span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
        </Button>
        {isOpen && (
          <Card className="mt-2">
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={cn(
                        "text-left w-full py-2 px-2 rounded transition-colors hover:bg-gray-100",
                        item.level === 3 && "ml-4",
                        activeId === item.id && "bg-[#F4B400]/20 text-[#0D1B2A] font-medium"
                      )}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default TableOfContents;
