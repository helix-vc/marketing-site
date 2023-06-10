'use client';

import Image from 'next/image';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import { Button } from './Button';
import backgroundImage from '@/images/background-newsletter.jpg';
import { Container } from '@/components/Container';

function ArrowRightIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Newsletter() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date on our start-ups and house plants 🌱🧬
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on all of our ventures and be the first to get notified when our house plants make
                trillions.
              </p>
            </div>
            {!formSubmitted && (
              <Formik
                initialValues={{
                  'bot-field': '',
                  email: '',
                }}
                onSubmit={async (values, formikHelpers) => {
                  const formData = new FormData();
                  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                  formData.append('email', values.email);
                  formData.append('timezone', timezone);
                  formData.append('form-name', 'sign-up');
                  formData.append('bot-field', values['bot-field']);

                  try {
                    await fetch('/', {
                      body: new URLSearchParams(formData as unknown as string).toString(),
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      method: 'POST',
                    });
                    setFormSubmitted(true);
                    console.debug('Form submitted successfully');
                  } catch (error) {
                    console.error(error);
                    formikHelpers.setErrors({ email: 'Something went wrong' });
                  } finally {
                    formikHelpers.resetForm();
                  }
                }}
              >
                <Form name="sign-up" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="sign-up" />
                  <input type="hidden" name="timezone" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <Field name="bot-field" />
                    </label>
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                    Sign up to our newsletter <span aria-hidden="true">&darr;</span>
                  </h3>
                  <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Email address"
                      aria-label="Email address"
                      className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                    <Button type="submit">
                      <span className="sr-only sm:not-sr-only">Sign up today</span>
                      <span className="sm:hidden">
                        <ArrowRightIcon className="h-6 w-6" />
                      </span>
                    </Button>
                  </div>
                </Form>
              </Formik>
            )}
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex w-full max-w-sm flex-col items-center justify-center gap-4 md:w-1/2 md:flex-row"
                >
                  <div className="flex-none px-3.5 py-2.5 text-center text-2xl font-semibold text-blue-900">
                    Your house plant will be delivered soon! 🌱
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
