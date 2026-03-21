"use client";

import Link from "next/link";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useState } from "react";
import { Typography } from "@/ui/design-system/typography/typography";

interface Item {
  label: string;
  href: string;
}

interface Props {
  label: string;
  items: Item[];
}

export const DropdownMenu = ({ label, items }: Props) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(2), flip(), shift({ padding: 12 })],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <div className="relative inline-block shrink-0">
      <button
        ref={refs.setReference}
        type="button"
        className="group mb-3 inline-flex items-center gap-2"
        {...getReferenceProps()}
      >
        <Typography
          variant="h2-article-title"
          component="span"
          theme="primary"
          className="tracking-[9px]"
          stretch="condensed"
          weight={700}
        >
          {label}
        </Typography>

        <svg
          className="h-4 w-4 text-primary transition-transform duration-200 group-aria-[expanded=true]:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="z-[60] min-w-[180px] rounded-sm border border-black/10 border-t border-t-secondary-100 bg-primary py-2 shadow-lg"
          {...getFloatingProps()}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block w-full p-2 hover:bg-primary-500 self-start text-left"
            >
              <Typography
                variant="h2-article-title"
                component="span"
                theme="white"
                className="tracking-[4px] text-[0.9rem] "
                weight={700}
                stretch="condensed"
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};