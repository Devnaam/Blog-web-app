
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BlogBreadcrumbProps {
  category: string;
  title: string;
}

const BlogBreadcrumb = ({ category, title }: BlogBreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-[#0D1B2A] flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link to="/blog" className="hover:text-[#0D1B2A]">
        Blog
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-[#F4B400]">{category}</span>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-400 truncate max-w-xs">{title}</span>
    </nav>
  );
};

export default BlogBreadcrumb;
