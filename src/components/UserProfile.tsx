
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { User } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user.user_metadata?.avatar_url} />
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <span className="text-white text-sm hidden md:block">
        {user.user_metadata?.full_name || user.email}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={handleSignOut}
        className="text-white border-white hover:bg-white hover:text-[#0D1B2A]"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default UserProfile;
