import { NextStep, PageHero } from '@/components/Blocks'
import SignupForm from '@/components/SignupForm'

export const metadata = { title: 'Free Book for New Believers' }

export default function NewBelievers() {
  return (
    <>
      <PageHero eyebrow="Free ebook" title="I Gave My Life to Jesus. Now What?">
        <p>A New Believer&rsquo;s Guide to Knowing God, Growing in Faith, and Living the Christian Life. By Dr. Lee A. Simpson.</p>
      </PageHero>

      <section className="gift">
        <div className="wrap split">
          <div className="cover reveal">
            <img src="/images/cover-new-believers.jpg" alt="Book cover: I Gave My Life to Jesus. Now What? by Dr. Lee A. Simpson" />
          </div>
          <div className="prose reveal">
            <p className="eyebrow">Get your free ebook</p>
            <h2>You made the decision. Here is what to do next.</h2>
            <p>Tell us where to send it and the book is yours, free. Read it on your phone, tablet, computer, or Kindle.</p>
            <SignupForm />
            <p className="small-note">We will email the book to you. No cost, and you can unsubscribe any time.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split flip">
          <div className="prose reveal">
            <p className="eyebrow">Inside the book</p>
            <h2>Answers to the questions every new believer has.</h2>
            <p>What happened to me when I gave my life to Jesus? How do I pray? How do I read the Bible? What do I do when I miss it?</p>
            <p>Dr. Simpson answers them in plain words, with encouragement and clear instructions for your first steps. You will also find where to connect: the church, the services, and resources to keep you growing.</p>
          </div>
          <div className="photo cover-shot reveal">
            <img src="/images/new-believers-devices.jpg" alt="The ebook shown on a tablet, laptop, phone and Kindle" />
          </div>
        </div>
      </section>
      <NextStep />
    </>
  )
}
