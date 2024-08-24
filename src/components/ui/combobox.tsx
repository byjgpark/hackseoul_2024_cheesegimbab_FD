"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "강남구",
    label: "강남구",
  },
  {
    value: "강동구",
    label: "강동구",
  },
  {
    value: "강북구",
    label: "강북구",
  },
  {
    value: "강서구",
    label: "강서구",
  },
  {
    value: "관악구",
    label: "관악구",
  },
  {
    value: "광진구",
    label: "광진구",
  },
  {
    value: "구로구",
    label: "구로구",
  },
  {
    value: "금천구",
    label: "금천구",
  },
  {
    value: "노원구",
    label: "노원구",
  },
  {
    value: "도봉구",
    label: "도봉구",
  },
  {
    value: "동대문구",
    label: "동대문구",
  },
  {
    value: "동작구",
    label: "동작구",
  },
  {
    value: "마포구",
    label: "마포구",
  },
  {
    value: "서대문구",
    label: "서대문구",
  },
  {
    value: "서초구",
    label: "서초구",
  },
  {
    value: "성동구",
    label: "성동구",
  },
  {
    value: "성북구",
    label: "성북구",
  },
  {
    value: "송파구",
    label: "송파구",
  },
  {
    value: "양천구",
    label: "양천구",
  },
  {
    value: "영등포구",
    label: "영등포구",
  },
  {
    value: "용산구",
    label: "용산구",
  },
  {
    value: "은평구",
    label: "은평구",
  },
  {
    value: "종로구",
    label: "종로구",
  },
  {
    value: "중구",
    label: "중구",
  },
  {
    value: "중랑구",
    label: "중랑구",
  },
]


export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
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
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
