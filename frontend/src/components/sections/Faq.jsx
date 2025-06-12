import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MapPin, Bot, Shield, CreditCard, Clock, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Faq = () => {
 const faqData = [
  {
    id: "item-1",
    question: "What is TravelMateAI?",
    answer: "TravelMateAI is an AI-powered travel planning platform that helps users discover and plan their dream trips. Using cutting-edge machine learning technology, we provide personalized recommendations tailored to your preferences and budget. Currently, TravelMateAI focuses on destinations in East Java, with the potential for expansion in the future.",
    icon: <Bot className="w-5 h-5 text-blue-500" />
  },
  {
    id: "item-2",
    question: "How does TravelMateAI work?",
    answer: "TravelMateAI uses advanced AI algorithms to analyze your travel preferences, budget, and personal interests. Our system processes data from hundreds of destinations in East Java and delivers personalized recommendations for the best travel experience.",
    icon: <MapPin className="w-5 h-5 text-green-500" />
  },
  {
    id: "item-3",
    question: "Is TravelMateAI free to use?",
    answer: "Yes, TravelMateAI offers its basic services for free. Users can access trip planning features, destination recommendations, and itinerary builder at no hidden costs. We also offer premium packages with additional features.",
    icon: <CreditCard className="w-5 h-5 text-purple-500" />
  },
  {
    id: "item-4",
    question: "How accurate are the AI recommendations?",
    answer: "Our recommendations are highly accurate thanks to learning from vast travel data and user feedback. Our system continuously learns and improves the quality of recommendations over time, delivering an increasingly personalized experience.",
    icon: <Shield className="w-5 h-5 text-orange-500" />
  },
  {
    id: "item-5",
    question: "How long does it take to create an itinerary?",
    answer: "TravelMateAI can generate a comprehensive travel itinerary in just a few minutes. Once you enter your travel preferences, our AI processes the information and delivers a detailed and organized travel plan.",
    icon: <Clock className="w-5 h-5 text-red-500" />
  },
  {
    id: "item-6",
    question: "Which destinations are supported?",
    answer: "TravelMateAI currently supports destinations throughout East Java, including popular cities, hidden gems, and exotic spots. Our database contains comprehensive information on attractions, hotels, restaurants, and activities at each location. We plan to expand to more regions in the future.",
    icon: <Globe className="w-5 h-5 text-teal-500" />
  },
//   {
//     id: "item-7",
//     question: "Can I share my itinerary with friends?",
//     answer: "Absolutely! TravelMateAI features collaboration tools that allow you to share your itinerary with friends or family. You can invite others to view, edit, or provide feedback on your travel plan.",
//     icon: <Users className="w-5 h-5 text-indigo-500" />
//   },
  {
    id: "item-8",
    question: "Is my personal data safe?",
    answer: "Data security is our top priority. TravelMateAI uses end-to-end encryption and complies with international security standards. Your personal data will never be shared with third parties without your explicit consent.",
    icon: <Shield className="w-5 h-5 text-emerald-500" />
  }
]


  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about TravelMateAI? Here are some of the most common queries we receive from our users. If you have more questions, feel free to reach out to our support team.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-100 rounded-2xl px-6 py-2 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group-hover:text-blue-600 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 pl-16">
                  <div className="prose prose-gray max-w-none">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Don't hesitate to contact us for any other questions or support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq