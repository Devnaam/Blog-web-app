
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Twitter, Linkedin, Facebook, MessageCircle, Send, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface SocialSharingProps {
  title: string;
  url?: string;
  description?: string;
}

const SocialSharing = ({ title, url = window.location.href, description = '' }: SocialSharingProps) => {
  const [copied, setCopied] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
      color: 'hover:bg-green-50 hover:text-green-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${shareData.title}&url=${shareData.url}`,
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
      color: 'hover:bg-blue-50 hover:text-blue-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
      color: 'hover:bg-blue-50 hover:text-blue-800'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${shareData.url}&text=${shareData.title}`,
      color: 'hover:bg-blue-50 hover:text-blue-500'
    }
  ];

  const handleShare = (platform: typeof socialPlatforms[0]) => {
    window.open(platform.url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-[#0D1B2A] mb-4 flex items-center">
          <Share2 className="w-5 h-5 mr-2" />
          Share This Article
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              onClick={() => handleShare(platform)}
              className={`justify-start ${platform.color} transition-colors`}
            >
              <platform.icon className="w-4 h-4 mr-2" />
              {platform.name}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={handleCopyLink}
            className={`justify-start ${
              copied 
                ? 'bg-green-50 text-green-600 border-green-200' 
                : 'hover:bg-gray-50'
            } transition-colors`}
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialSharing;
