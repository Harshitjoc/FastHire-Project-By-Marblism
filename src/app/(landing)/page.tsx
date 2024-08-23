'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  MailOutlined,
  SettingOutlined,
  SendOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Pre-Designed Templates',
      description:
        'Choose from a variety of professionally designed email templates to suit your needs.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Customizable Settings',
      description:
        'Easily customize templates to match your brand and message.',
      icon: <SettingOutlined />,
    },
    {
      heading: 'Bulk Email Sending',
      description: 'Send emails to multiple recipients with just a few clicks.',
      icon: <SendOutlined />,
    },
    {
      heading: 'Dedicated User Space',
      description:
        'Save your settings and preferences for a personalized experience.',
      icon: <UserOutlined />,
    },
    {
      heading: 'Efficient Workflow',
      description:
        'Streamline your email-sending process and save valuable time.',
      icon: <MailOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Marketing Manager',
      content:
        'This platform has revolutionized our email campaigns. It’s incredibly efficient and easy to use!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Event Organizer',
      content:
        'Sending bulk emails has never been this simple. We’ve saved so much time!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Small Business Owner',
      content:
        'The customizable templates are fantastic. Our emails look professional and polished.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Perfect for individuals and small teams.',
      monthly: 9,
      yearly: 69,
      features: ['Pre-Designed Templates', 'Customizable Settings'],
    },
    {
      title: 'Pro',
      description: 'Ideal for growing businesses.',
      monthly: 19,
      yearly: 149,
      features: [
        'All Basic Features',
        'Bulk Email Sending',
        'Dedicated User Space',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Best for large organizations.',
      monthly: 29,
      yearly: 229,
      features: ['All Pro Features', 'Priority Support', 'Advanced Analytics'],
    },
  ]

  const questionAnswers = [
    {
      question: 'How do I customize an email template?',
      answer:
        'You can easily customize any template by selecting it and using our intuitive editor to make changes.',
    },
    {
      question: 'Can I send emails to multiple recipients at once?',
      answer:
        'Yes, our platform allows you to send emails to multiple recipients with just a few clicks.',
    },
    {
      question: 'Is there a limit to the number of emails I can send?',
      answer:
        'Our plans come with different email limits. Please refer to our pricing section for more details.',
    },
    {
      question: 'Can I save my email settings and preferences?',
      answer:
        'Absolutely! Each user has a dedicated space to save their settings and preferences.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Select a Template',
      description:
        'Choose from our wide range of pre-designed email templates.',
    },
    {
      heading: 'Customize Your Email',
      description: 'Use our editor to personalize your chosen template.',
    },
    {
      heading: 'Upload Your Contacts',
      description: 'Easily upload your list of email recipients.',
    },
    {
      heading: 'Send Your Email',
      description:
        'Send your customized email to multiple recipients with a single click.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Manual Email Sending is Time-Consuming',
    },
    {
      emoji: '😖',
      title: 'High Risk of Errors',
    },
    {
      emoji: '😩',
      title: 'Repetitive Configuration is Frustrating',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Effortless Email Campaigns"
        subtitle="Streamline your email-sending process with our user-friendly platform."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/BuOTR6-fasthire-63cp"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Email Marketing Goals"
        subtitle="Our platform provides the tools you need to succeed."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our platform has helped others achieve their email marketing dreams."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your needs and budget."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Email Campaigns?"
        subtitle="Join thousands of satisfied users today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
