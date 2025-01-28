import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "general", label: "General" },
  { id: "sponsorship", label: "Sponsorship" },
];

const faqs = [
  {
    question: "What is Qala-Inno-Vista?",
    answer:
      "Qala-Inno-Vista is the annual TechFest organized at our college, celebrating innovation, technology, and creativity. This year’s theme focuses on bridging cultural richness (Qala), innovation, and futuristic visions (Vista).",
    categories: ["general"],
  },
  {
    question: "When and where will Qala-Inno-Vista take place?",
    answer:
      "The event will be held at [Insert Venue Name] on [Insert Date(s)]. Specific timings and locations for individual events will be provided in the event schedule.",
    categories: ["general"],
  },
  {
    question: "Who can participate?",
    answer:
      "Qala-Inno-Vista is open to all students, faculty, and industry professionals. Participants from other colleges and institutions are also welcome, depending on the event.",
    categories: ["general"],
  },
  {
    question: "What types of events can we expect?",
    answer:
      "Events include: Technical Competitions (coding, robotics, hackathons, etc.), Workshops and Seminars, Guest Lectures by Industry Experts, Cultural and Creative Events, and Exhibitions and Project Demonstrations.",
    categories: ["general"],
  },
  {
    question: "How do I register for events?",
    answer:
      "Registration can be completed via the official Qala-Inno-Vista website or by contacting event coordinators. Early registration is encouraged as slots may fill up quickly.",
    categories: ["general"],
  },
  {
    question: "Is there a participation fee?",
    answer:
      "Some events are free to participate in, while others may have a nominal fee. Details will be provided on the event registration page.",
    categories: ["general"],
  },
  {
    question: "What prizes are available?",
    answer:
      "Prizes vary by event and include cash awards, certificates, trophies, and exclusive internship opportunities.",
    categories: ["general"],
  },
  {
    question: "Are there any pre-requisites for participation?",
    answer:
      "Some technical events may require basic knowledge or experience in the respective field. Specific details will be mentioned in the event description.",
    categories: ["general"],
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes! Qala-Inno-Vista provides ample opportunities to network with peers, industry professionals, and guest speakers through workshops, seminars, and informal sessions.",
    categories: ["general"],
  },
  {
    question: "What should participants bring to the event?",
    answer:
      "Participants are advised to bring their college ID, laptops (if required for the event), and any other tools or materials specified in the event guidelines.",
    categories: ["general"],
  },
  {
    question: "Who do I contact for more information?",
    answer:
      "You can reach out to the Qala-Inno-Vista help desk or email us at vista@timscdrmumbai.in. For event-specific queries, contact the respective event coordinator listed on the website.",
    categories: ["general"],
  },
  {
    question: "What are the benefits of sponsoring Qala-Inno-Vista?",
    answer:
      "Sponsoring Qala-Inno-Vista provides brand visibility to a large audience, direct engagement with young talent, promotional opportunities during events, and acknowledgment in all promotional materials, including banners, websites, and social media platforms.",
    categories: ["sponsorship"],
  },
  {
    question: "What sponsorship tiers are available?",
    answer:
      "We offer various sponsorship tiers, such as Title Sponsor, Associate Sponsor, Event Sponsor, and Partner Sponsor. Each tier comes with unique benefits tailored to the sponsor’s needs.",
    categories: ["sponsorship"],
  },
  {
    question: "How can a company become a sponsor?",
    answer:
      "Companies can become sponsors by contacting the Sponsorship Team via email at vista@timscdrmumbai.in or phone at +91-7339996617. A sponsorship proposal detailing tiers and benefits will be shared upon request.",
    categories: ["sponsorship"],
  },
  {
    question: "What is the minimum sponsorship amount?",
    answer:
      "The minimum sponsorship amount depends on the tier selected. Details can be found in the sponsorship proposal provided by the team.",
    categories: ["sponsorship"],
  },
  {
    question: "Will sponsors receive acknowledgment during the event?",
    answer:
      "Yes, sponsors will be acknowledged through banners, stage mentions, digital platforms, and event brochures as per their sponsorship tier.",
    categories: ["sponsorship"],
  },
  {
    question:
      "Can sponsors promote their products or services during the event?",
    answer:
      "Absolutely! Depending on the sponsorship tier, companies can set up stalls, distribute promotional materials, or conduct product demonstrations during the event.",
    categories: ["sponsorship"],
  },
  {
    question: "Are there opportunities for custom sponsorship packages?",
    answer:
      "Yes, we can create customized sponsorship packages to meet specific branding and promotional goals. Please contact the Sponsorship Team for more information.",
    categories: ["sponsorship"],
  },
  {
    question: "How will sponsors be promoted online?",
    answer:
      "Sponsors will be promoted through our official website, social media posts, email campaigns, and digital marketing efforts. Logos and mentions will be prominently featured.",
    categories: ["sponsorship"],
  },
  {
    question: "What is the deadline for sponsorship confirmation?",
    answer:
      "The deadline for sponsorship confirmation will be [Insert Deadline]. Early confirmation is recommended to maximize promotional opportunities.",
    categories: ["sponsorship"],
  },
  {
    question: "Who should sponsors contact for more information?",
    answer:
      "Sponsors can contact the Sponsorship Team Head, Priyanshu Chouhan, via email at vista@timscdrmumbai.in or phone at +91-7339996617 for detailed inquiries.",
    categories: ["sponsorship"],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [showAllFaq, setShowAllFaq] = useState(false);

  const filteredFaqs = activeCategory
    ? faqs.filter((faq) => faq.categories.includes(activeCategory))
    : faqs;

  return (
    <section className=" bg-[#1c1c1c] p-4 md:p-8">
      <div className="container mx-auto max-w-xl">
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                FAQs
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category.id ? null : category.id
                      )
                    }
                    className={cn(
                      "border border-white/10 hover:bg-white/10",
                      activeCategory === category.id
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {filteredFaqs.map(
                (faq, index) =>
                  (showAllFaq || index <= 4) && (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-white/10 rounded-lg px-6 backdrop-blur-sm"
                    >
                      <AccordionTrigger className="text-start text-lg text-white hover:text-white/90 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
              )}
            </Accordion>
            <div className="flex items-center justify-center">
              <Button
                className="bg-[#5a5a5a] hover:bg-[#424242]"
                onClick={() => setShowAllFaq((prev) => !prev)}
              >
                {showAllFaq ? "Show less" : "Load more"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
