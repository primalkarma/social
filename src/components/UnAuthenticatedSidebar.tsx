import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function UnAuthenticatedSidebar() {
  return (
    <div className="sticky top-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-semibold text-xl">
            Welcome to Social
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-4">
            Login to start your journey
          </p>
          <SignInButton mode="modal">
            <Button className="w-full" variant="outline">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="w-full" variant="outline">
              Sign Up
            </Button>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );
}

export default UnAuthenticatedSidebar;
