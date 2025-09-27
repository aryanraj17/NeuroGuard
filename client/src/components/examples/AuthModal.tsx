import { useState } from "react";
import AuthModal from '../AuthModal';
import { Button } from "@/components/ui/button";

export default function AuthModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState<"login" | "register">("login");

  return (
    <div className="p-8 space-y-4">
      <div className="flex space-x-4">
        <Button 
          onClick={() => {
            setDefaultTab("login");
            setIsOpen(true);
          }}
        >
          Open Login Modal
        </Button>
        <Button 
          variant="outline"
          onClick={() => {
            setDefaultTab("register");
            setIsOpen(true);
          }}
        >
          Open Register Modal
        </Button>
      </div>
      
      <AuthModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultTab={defaultTab}
        onLoginSuccess={(user) => console.log('Login success:', user)}
        onRegisterSuccess={(user) => console.log('Register success:', user)}
      />
    </div>
  );
}