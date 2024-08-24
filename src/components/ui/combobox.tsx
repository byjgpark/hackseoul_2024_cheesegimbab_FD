"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import addressApi from "@/api/addressApi";

interface Framework {
  value: string;
  label: string;
}

export function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [frameworks, setFrameworks] = useState<Framework[]>([]); // State to store API response data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = {
          status: (statusCode: number) => ({
            json: (data: any) => data,
          }),
        };

        const response = await addressApi({}, res);
        console.log("API response:", response);

        if (Array.isArray(response)) {
          setFrameworks(response);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
          >
            {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "사시는 구"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="사시는 구" className="h-9" />
            <CommandList>
              {frameworks.length === 0 ? (
                  <CommandEmpty>No options found.</CommandEmpty>
              ) : (
                  <CommandGroup>
                    {frameworks.map((framework) => (
                        <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setOpen(false);
                            }}
                        >
                          {framework.label}
                          <CheckIcon
                              className={cn(
                                  "ml-auto h-4 w-4",
                                  value === framework.value ? "opacity-100" : "opacity-0"
                              )}
                          />
                        </CommandItem>
                    ))}
                  </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
  );
}
