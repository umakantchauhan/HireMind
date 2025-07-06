import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

// import InterviewCard from "@/components/InterviewCard";

// import { getCurrentUser } from "@/lib/actions/auth.action";
// import {
//   getInterviewsByUserId,
//   getLatestInterviews,
// } from "@/lib/actions/general.action";


const Page = () => {//cta=call to action
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview-Ready with AI-Powered Practice & feedback</h2>
          <p className="text-lg">
            practice on real interview questions and get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Yours Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>

    </>
  )
}

export default Page