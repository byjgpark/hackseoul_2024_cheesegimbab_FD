"use client"

import {useRouter} from 'next/navigation'
// import { useHistory } from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {toast} from "@/components/ui/use-toast"

const items = [
  {
    id: "hall",
    label: "웨딩홀",
  },
  {
    id: "studio",
    label: "스튜디오",
  },
  {
    id: "dress",
    label: "드레스",
  },
  {
    id: "makeup",
    label: "메이크업",
  },
  {
    id: "drowry",
    label: "예물",
  }
] as const

const FormSchema = z.object({
  items: z.array(z.string()),
})

export function CheckboxReactHookFormMultiple() {

  const router = useRouter()
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {



    console.log("data", data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    
    console.log(JSON.stringify(data, null, 2));
    router.push(`wedding/1`);

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">선택 사항</FormLabel>
                <FormDescription>
                  결혼 준비 하는데 필요한 항목을 선택해주세요.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
