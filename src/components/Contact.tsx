import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


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
    // Here you would typically send the form data to a backend service
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      
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
                  className="mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                  className="mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                  className="mt-2 p-3 min-h-30 border border-gray-300 dark:border-gray-600 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
      </div>
    </section>
  );
};

export default Contact;
