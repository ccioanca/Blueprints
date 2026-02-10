import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownIcon } from 'lucide-react';
import { toast } from 'sonner';
import { error } from 'node:console';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast.promise(
      () => new Promise<{description: string}>((resolve, reject) =>
        setTimeout(() => resolve({ description: "I'll get back to you shortly!" }), 1000)
        // setTimeout(() => error({ description: "Error submitting form. Try again shortly." }), 1000)
      ),
      {
        loading: "Loading...",
        success: "Form Submitted Successfully",
        error: "Error Submitting Form",
        description: (data) => {
          return data.description;
        },
        position: 'top-center'
      }
    )
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
  };


  return (
    <section id="contact" className="py-16">
      
      <div className="container mx-auto section">
        <Card className=''>
          <CardHeader>
            <CardTitle>
              <h2 className="text-4xl font-bold text-center">Get in Touch!</h2>
            </CardTitle>
            <CardDescription>
              <p className='text-center mb-4'>Shoot me a message by filling some information below</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-medium text-gray-700 dark:text-gray-300">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="mt-2 p-3 border0"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-medium text-gray-700 dark:text-gray-300">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="mt-2 p-3 border"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg font-medium text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="mt-2 p-3 min-h-30 border"
                />
              </div>
              <Button
                type="submit"
                size="xl"
                variant="default"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className='mt-12'>
          <CardHeader>
            <CardTitle>
              <h2 className="text-4xl font-bold text-center">Or!</h2>
            </CardTitle>
            <CardDescription>
              <p className='text-center mb-4'>Get in touch with me manually</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-inside'>
              <li className='list-disc mb-2'>Email:</li>
              <li className='list-disc mb-2'>Phone:</li>
              <li className='list-disc mb-2'>LinkedIn:</li>
              <li className='list-disc mb-2'>GitHub:</li>
            </ul>
            <p className='text-center mb-4'>And grab a copy of my resume while you're here</p>
            <div className='flex justify-center'>
              <Button className='mx-auto' asChild>
                <a href='/public/assets/Resume Cristian cioanca.pdf' download={"Resume-Cristian.pdf"}>
                  <ArrowDownIcon /> My Resume
                </a>
              </Button>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
