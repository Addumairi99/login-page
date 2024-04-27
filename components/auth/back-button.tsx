"use client";

import { string } from "zod";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackbuttonProps {
  href: string;
  label: string;
}

export const Backbutton = ({ href, label }: BackbuttonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
