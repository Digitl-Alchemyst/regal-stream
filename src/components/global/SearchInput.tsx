'use client';

import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  searchInput: z.string().min(2).max(124),
})

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchInput: '',
    },
  });

    function onSubmit(values: z.infer<typeof formSchema>) {
      router.push(`/search/${values.searchInput}`)
      form.reset();
    }
    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-x-2 flex items-center'>
        <FormField
          control={form.control}
          name='searchInput'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Search for a Movie' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchInput;
