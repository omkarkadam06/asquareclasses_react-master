import React from 'react';
import './Content_pg.css';
import { useInView } from 'react-intersection-observer';
import img from '../../Assets/dazzle-blog-post-article.gif';
import { Link } from 'react-router-dom';
import Form2 from '../../Form2/Form2';
import amit_sir from '../../Assets/amit.png';

function Content_pg({ data }) {
  const [viewRef1, inView1] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const Heading = ({ children }) => (
    <span className="heading_blog_cont">{children}</span>
  );

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const data_content = [
    {
      id: 1,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-classes-in-pimple-Saudagar-1170x576-1.png',
      content: (
        <>
          NEET examination is so tough it is not important that you’ll clean it
          in a single attempt. You could need to seem for the examination two
          times or thrice. Usually, understand that you aren’t failed until you
          stop trying. And if you keep attempting you’ll now not fail. A crucial
          fact here is that you should understand what went incorrect inside the
          previous attempt and correct it. You may no longer prevail in case you
          keep as the last time.
          <br />
          <div className="space_cont_pg" />
          <Heading>Discover ways to Manage a while </Heading>
          <br />
          <div className="space_cont_pg" />
          Time management plays a vital function with regard to your NEET
          instruction. It’s far very crucial to get all of the proper answers in
          the span of 2 hundred mins. Consequently, set a timer for yourself
          each time you’re practising a ridiculous paper or attempting a mock
          take look at it. Ultimately you’ll be able to solve the practice paper
          within the allocated time.(Neet Classes in pimple Saudagar)
          <br />
          <div className="space_cont_pg" />
          <Heading>
            Discuss with Specific Resources and Reference Materials
          </Heading>
          <br />
          <div className="space_cont_pg" />
          Do no longer keep on with the equal reference books or notes supplied
          by way of your education centre. Surf the net and talk to distinct
          online platforms to collect statistics. A maximum of the content
          available on the internet is unfastened. Make whole use of these
          resources to advantage of extra know-how regarding NEET.
          <br />
          <div className="space_cont_pg" />
          <Heading>Devise a Proper Study Plan</Heading>
          <br />
          <div className="space_cont_pg" />
          It’s far necessary to plot a proper plan earlier than beginning with
          your NEET arrangements. Watch YouTube motion pictures of toppers
          regarding their guidance techniques. This could provide you with a
          concept of how to chalk out a powerful look at the plan.
          <br />
          <div className="space_cont_pg" />
          <Heading>Join a Neet Classes</Heading>
          <br />
          <div className="space_cont_pg" />
          Becoming a member of a training centre will clearly assist you in lots
          of approaches concerning your NEET preparation. Training centres
          assist you to benefit from self-belief together with your examination.
          The experienced college and mentors will help you all through your
          NEET practice in resolving your doubts and queries. (Neet Classes in
          pimple Saudagar)
          <br />
          <div className="space_cont_pg" />
          <Heading>Do not Hesitate to ask Questions</Heading>
          <br />
          <div className="space_cont_pg" />
          Maximum students hesitate to put forth their doubts and do now not ask
          their questions. This may upload up extra confusion. Ask all your
          doubts for the duration of or after the elegance hours and get all of
          them clarified before the examination.
        </>
      )
    },
    {
      id: 2,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/NEET-Repeater-Classes.png',
      content: (
        <>
          After the Declaration of NEET Result, There are Three classes of
          students: (1) one who qualified for NEET and enrol in their dream
          college. (2) a person who qualified for NEET but might not be able to
          enrol on their dream college and (3) some others who couldn’t achieve
          the preferred marks important to qualify for NEET. Asquare is one of
          the NEET Repeater Classes in Pune
          <br />
          <div className="space_cont_pg" />
          For the third class of human beings, taking a drop year becomes
          imperative if they nevertheless wish to pursue a profession inside the
          scientific discipline. However, for the ones belonging to the second
          class, “Do I have to take a drop of 12 months?” is a vital query that
          requires careful brooding about and consideration of all related
          factors. But don’t worry! This blog aims to assist clean your doubts
          through five reasons to consider a drop year after NEET. You may be
          capable of take the right selection and strategies to place your
          first-rate foot ahead for NEET Exam.
          <br />
          <div className="space_cont_pg" />
          <Heading>
            Questioning to Take a Drop Year for NEET? Here Are 5 Motives to Move
            for It!
          </Heading>
          <br />
          <div className="space_cont_pg" />
          Before we proceed in addition, realize this, if you are repeating the
          year and preparing for NEET again, you already have a facet over the
          rest. How? Let’s talk about it!
          <br />
          <div className="space_cont_pg" />
          <Heading>(1) Extra self-assurance and fewer exam Jitters</Heading>
          <br />
          <div className="space_cont_pg" />
          For a primary timer, be it whichever subject, nervousness is something
          that one cannot overcome absolutely. Regardless of how assured you
          are, you continue to do now not understand what to anticipate inside
          the real exam paper and how nicely you will carry out. Considering the
          fact that lakhs of aspirants are competing to grab a seat in some of
          the most coveted clinical colleges, being at the pinnacle of your
          sport is important.
          <br />
          <div className="space_cont_pg" /> If you are a NEET dropper who has
          taken the examination once, you may experience much less jittery and
          more assured due to the fact you have got seen the examination paper
          as soon as and know the query pattern. You may probably take a
          calculated technique as to how tons time you want to devote to every
          segment of the examination paper to have sufficient time for revision.
          Furthermore, you might come across comparable questions and might
          rectify your errors this time.
          <br />
          <div className="space_cont_pg" />
          <Heading>(2) No Upper Age Restrict</Heading>
          <br />
          <div className="space_cont_pg" />
          The coolest information for all NEET aspirants is that there may be
          not a limit on the upper age restriction for NEET examinees, and for
          this reason no restriction on the number of attempts. Therefore, you
          have got multiple chances handy to prove yourself and make it to your
          dream medical university.
          <br />
          <div className="space_cont_pg" />
          Thus, college students who haven’t assured a sufficient experience
          like they need greater time for education ought to absolutely consider
          taking a drop 12 months. NEET is one of the toughest aggressive checks
          in India, and being a medical doctor is a profession that calls for
          sound expertise and responsibility. With the load of the upper age
          limit being removed, it would be smart to repeat a year and make an
          excellent preparation strategy. (NEET Repeater Classes)
          <br />
          <div className="space_cont_pg" />
          <Heading>(3) Cognizance Simply on NEET Coaching</Heading>
          <br />
          <div className="space_cont_pg" />
          It’s far certainly genuine that handling normal study room research,
          assignments, term tests, board assessments in magnificence 12 and
          analyzing for competitive exams like NEET poses a massive challenge.
          It is henceforth a wise desire if one decides to give themself a year,
          completely dedicated to just making ready for NEET. (NEET Repeater
          Classes)
          <br />
          <div className="space_cont_pg" /> In this gap of 12 months which you
          take, you could attention entirely to the NEET 2023 Syllabus and look
          at best the chapters which might be critical from the NEET examination
          factor of view. You would additionally have sufficient time to
          instruct questions solely framed for NEET and cognizance of your
          self-handiest on NEET.
          <br />
          <div className="space_cont_pg" />
          <Heading>(4) Working on Mistakes and Improving Rank</Heading>
          <br />
          <div className="space_cont_pg" />
          If you are a person who has given the exam as soon as but is thinking
          about dropping out and performing for NEET 2023, it is a superb
          opportunity that you must use for your full potential. Begin with the
          aid of asking yourself “What went incorrect the ultimate time?”
          observe down your susceptible areas and analyse and be given the
          honest motives at the back of your low or unhappy scores inside the
          preceding strive.
          <br />
          <div className="space_cont_pg" />
          In this context, it’s far vital that you are honest with yourself
          whilst creating this list of reasons. Now, the subsequent thing to do
          is to work on your setbacks and support your plus points. You can take
          the help of a mentor or manual, look at and revise sufficiently and
          resolve as many query papers as possible. Do strive NEET Mock tests
          this time if you didn’t previously! (NEET Repeater Classes)
          <br />
          <div className="space_cont_pg" />
          <Heading>(5) Revision More Than Preparation</Heading>
          <br />
          <div className="space_cont_pg" />
          The biggest gain of taking a drop 12 months for NEET is that you
          wouldn’t possibly be analyzing something new but revising and
          re-revising what you have got already learnt. For this reason, as soon
          as you’ve got an awesome draw close to the NCERT lessons, you could
          recognise more by trying mock exams and practising pattern questions
          and previous years’ question papers.
        </>
      )
    },
    {
      id: 3,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/JEE-Coaching-in-Pimple-Saudagar.jpg',
      content: (
        <>
          The joint entrance examination or JEE is an entrance examination this
          is conducted by the National Testing Agency each year. The exam is
          conducted in two phases: JEE mains and JEE advance.
          <br />
          <div className="space_cont_pg" />
          <Heading>JEE Score and how to Enhance it</Heading>
          <br />
          <div className="space_cont_pg" />
          JEE score is critical to determine the rank of the aspirant and
          allocation of college relies upon this rank. The main exam is to
          figure out standards for all the NITs throughout the country while
          admission into IITs is decided based totally on the Advance score. But
          many students are unable to get a quality score on this examination.
          The motives at the back of this can be numerous and, in this blog, we
          will talk about how a scholar can improve his JEE rating.
          <br />
          <div className="space_cont_pg" />
          <Heading>
            The Following Techniques may be of Terrific Help to Improve your JEE
            Score:
          </Heading>
          <br />
          <div className="space_cont_pg" /> &#8658; OMR sheets: As this
          examination is objective-based, one ought to exercise filling out OMR
          sheets properly in advance to keep away from any sort of mistake in
          the examination corridor because there is no change of a spare sheet
          and this could reduce your score for certain.
          <br />
          <div className="space_cont_pg" />
          &#8658; Mock exams: remedy as many mock papers as you could. This
          could not only handiest improve your accuracy but additionally assist
          you in time bounded training. Mock papers can be of two types:
          <br />
          <div className="space_cont_pg" /> &#8658; Revision: Revise as a great
          deal as you could. Revision lets you take into account records,
          diagrams, and methodologies that you’ve blanketed whilst analyzing for
          the first time. You may Revise with the assistance of self-made notes,
          mind maps, and so on. The revision additionally boosts self-belief and
          reduces anxiety, if finished correctly.
          <br />
          <div className="space_cont_pg" />
          &#8658; Syllabus: go through the syllabus in detail and analyse every
          subject matter present there. Entire the entire syllabus with a proper
          method and timetable to get sufficient time for revision and mock
          papers. Cognizance of vulnerable regions extra and mark them so that
          you can revise them again and again.
          <br />
          <div className="space_cont_pg" /> &#8658; Previous year Question
          Papers: To perform nicely, you want to clear up at least 8-10
          preceding yr’s question papers. After fixing them, you may discover a
          repetition of many questions and this could help you build standards
          in detail.
          <br />
          <div className="space_cont_pg" /> &#8658; Exercise Numerical:
          Numericals contribute a large number of questions in this examination.
          Be it physics, chemistry, or mathematics numerical are relevant in all
          3 subjects. One has to practice each day to get in-depth expertise on
          the type of questions that may be requested. In the location of
          mugging them up or rote memorization, you need to write and exercise
          them. Understanding theory is very essential to solving numerical
          troubles.
          <br />
          <div className="space_cont_pg" /> &#8658; Try and Recognition on
          Stupid Errors: students make such errors due to tension and tension
          whilst fixing JEE papers. These small errors can cause a score loss.
          Subsequently, mistakes for calculation errors need to be taken care of
          for a good score. Peer pressure or over-pleasure also can lead to such
          mistakes. So, manipulate your exhilaration and preserve your attention
          on the exam.
          <br />
          <div className="space_cont_pg" /> &#8658; Time Management: it’s miles
          the most essential issue with the purpose to determine your JEE score.
          It is able to carry in addition to become worse your score. One has to
          take care of how a lot of time needs to be devoted to every
          difficulty. Moreover, the scholar needs to realize which difficulty to
          start on.
        </>
      )
    },
    {
      id: 4,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-institute.png',
      content: (
        <>
          Each Year, lakhs of students aspire to end up doctors. However, just a
          few get into MBBS courses in India. So, getting an MBBS path is an
          exceptional competitive technique. Over 18 lakh students compete every
          year to secure a seat in medical colleges in India. Step one for
          candidates seeking MBBS admission is qualifying for the NEET. (Medical
          Coaching Classes) After qualifying for the NEET examination, there are
          a lot of factors a scholar needs to realize to get into medical
          university just as the university cutoff, college rating, counselling,
          and extra. On this blog, we are able to speak about the whole thing in
          detail approximately getting admission to Medical college after
          qualifying for NEET.
          <br />
          <div className="space_cont_pg" />
          <Heading>
            Let’s begin our discussion approximately Admission to medical
            university After Qualifying for NEET with no delay!
          </Heading>
          <br />
          <div className="space_cont_pg" />
          1. Calculate the NEET Score Students can use this formula to calculate
          their NEET score: <br />
          <div className="space_cont_pg" />
          Total Marks = (Number of correct answers)x4 – (Number of incorrect
          answers)x1 <br />
          <div className="space_cont_pg" />
          2. Predict NEET Rank Use the total marks that you acquire from the
          above and expect ranks as in keeping with marks with preceding trends
          <br />
          <div className="space_cont_pg" />
          <Heading>What After Qualifying the NEET exam?</Heading>
          <br />
          <div className="space_cont_pg" />
          Candidates who qualify for the NEET examination could be eligible to
          participate in the counselling manner on the national, state, and AIQ
          levels. The NTA will bring together a list of NEET-UG-qualified
          applicants. Students should register at the MCC portal to participate
          in the counselling and seat allocation system. (Medical Coaching
          Classes)
          <br />
          <div className="space_cont_pg" /> The NEET counselling can be
          performed via MCC for 15% of the All India Quota, deemed/central
          universities/AFMS, and ESIC institutes. So, In the course of the MBBS
          counselling procedure, college students ought to be updated with
          NEET-associated statistics, pay the counselling fee, and fill out
          their path and college alternatives. Relying on the options stuffed
          through applicants, NEET AIR, reservation standards, and seat matrix,
          MCC will behaviour the NEET UG seat allotment. Candidates who’re given
          seats at some point of MBBS admission seat allotment need to document
          to the allocated institute.
          <br />
          <div className="space_cont_pg" />
          <Heading>NEET UG Counselling</Heading>
          <br />
          <div className="space_cont_pg" />
          Eligibility for NEET 2022 Counselling All applicants who clear the
          NEET exam will be eligible to apply for NEET counselling.
          <br />
          <div className="space_cont_pg" /> &#8658; Below AIQ, the ministry/MCC
          publishes an appropriate listing of certified applicants.
          <br />
          <div className="space_cont_pg" /> &#8658; There are kinds of
          eligibility criteria: standard standards and standards particular to
          vital universities.
          <br />
          <div className="space_cont_pg" /> &#8658; Applicants from specific
          categories have specific general NEET eligibility standards, such as
          the minimum percentage required. (Medical Coaching Classes)
          <br />
          <div className="space_cont_pg" /> &#8658; A candidate within the
          preferred category has to have a NEET rating of at least 50%. To be
          eligible for NEET counselling, General-PWD candidates should score
          45%, even SC/ST/OBC candidates should score 40%.
          <br />
          <div className="space_cont_pg" />
          <Heading>Documents Required for NEET Counselling</Heading>
          <br />
          <div className="space_cont_pg" />
          The listing of files that candidates must convey with them whilst
          reporting to their allotted college or institute for seat affirmation
          at some stage in NEET counselling is supplied underneath. Please
          ensure you’ve got each the originals and printouts of these documents
          with you.
          <br />
          <div className="space_cont_pg" /> &#8658; NEET Admit Card 2022
          <br />
          <div className="space_cont_pg" /> &#8658; NEET 2022 Result Card
          <br />
          <div className="space_cont_pg" /> &#8658; Class 10 Mark sheet and
          certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Class 12 Mark sheet and
          certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Certificate of Birth
          <br />
          <div className="space_cont_pg" /> &#8658; ID Proof
          <br />
          <div className="space_cont_pg" /> &#8658; Caste Certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Around 6-8 passport-size
          photographs
          <br />
          <div className="space_cont_pg" /> &#8658; Provisional Allotment Letter
        </>
      )
    },
    {
      id: 5,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-repeater.jpg',
      content: (
        <>
          NEET-UG is one of the most complicated tests in India. With every
          passing year, the exam is getting more difficult. It is truly ok, in
          case you do not crack the NEET/Medical exam on the first attempt,
          don’t be disheartened. Be kind to yourself and restart your
          preparations, ideally with good NEET repeater Coaching classes. One
          needs to also take into account that NEET consequences are not a
          reflection of your mind’s muscle mass. Occasionally, some might fall
          return on approach, timing, or even sheer good fortune, subsequently,
          it is important to have a smart approach if you are looking forward to
          cracking NEET inside the next attempt.
          <br />
          <div className="space_cont_pg" />
          ASQUARE Medical & IIT-JEE Academy has guided NEET Repeater students
          toward their dreams for more than 12 years. We have curated a to-do
          list for the repeaters as a summary of what we have discovered and
          learned over years.
          <br />
          <div className="space_cont_pg" />
          <Heading>Be Positive</Heading>
          <br />
          <div className="space_cont_pg" />
          One needs to maintain excessive morale during this time. The
          preliminary days are full of doubt and the whole thing seems gloomy.
          With staying power, consistent tough work, and a superb attitude this
          turbulent time will bypass and your examination date will come nearer.
          And this kind of guide and surroundings is supplied by just a few of
          the high-quality training institutes in PUNE
          <br />
          <div className="space_cont_pg" />
          <Heading>Analyze your Result</Heading>
          <br />
          <div className="space_cont_pg" />
          Before deciding about joining coaching institutes, private tuition
          classes, or even self-study routes, one needs to evaluate the score
          received in individual subjects thoroughly. The score can often be an
          eye-opener about the strengths and weaknesses. A thorough evaluation
          will help you in deciding which study method would prove the best
          option for your endeavour. A coaching institute focused on
          NEET/Medical uses the analysis and forms a suitable strategy for
          studying.
          <br />
          <div className="space_cont_pg" />
          <Heading>Update Study Strategy</Heading>
          <br />
          <div className="space_cont_pg" />
          As a repeater, the have-a-look-at method must be renewed and a brand
          new timetable should be prepared because this time around it’s far
          distinctive, you have got already studied the material and attempted
          lots of exams. The focus now ought to be on fixing mock assessments.
          To understand the ways in which questions may be asked and discover
          ways to manage time higher. Some other vital issue to attention to is
          bridging the gaps that were left last time. This can help in
          developing a greater stable basis for the ideas.
          <br />
          <div className="space_cont_pg" />
          <Heading>The Right Coaching Institutes</Heading>
          <br />
          <div className="space_cont_pg" />
          The right coaching institute for NEET repeater coaching will play a
          pivotal function in your adventure. An institute that helps your
          endeavour can be a big positive impact. Alongside studies, an
          institute’s approach to repeaters is vital to your NEET/Medical
          education.
        </>
      )
    },
    {
      id: 6,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/foundation.jpg',
      content: (
        <>
          In case you are aiming to crack the national-level competitive
          entrance exam like JEE or NEET, it’s understood that you need to put
          it together early & dedicatedly for Foundation Courses. IITJEE and
          NEET each are a number of the most popular, famed & most challenging
          tests in India where lots-of applicants appear each yr however only a
          few of them get selected on their preference of schools.
          <br />
          <div className="space_cont_pg" />
          Restricted availability of seats and issue degree of questions make
          those assessments challenging to clear. Therefore, the correct method
          and approach are required from the early stage of training to crack
          the exam with proper marks.
          <br />
          <div className="space_cont_pg" />
          But most of the students at the early level of schoolings like in std
          7th, 8th, or 10th are busy searching for methods to excel in their
          studies. They preserve practising formulas, definitions, and many
          others. Getting a command over ideas might also assist them to get
          precise marks, however, it won’t assist them in enhancing their
          questioning capacity.
          <br />
          <div className="space_cont_pg" />
          For reason generally in school exams, the questions come from the
          syllabus and students have no idea about the application-oriented
          questions. So, they face a lack of questioning potential. Then, what
          is the solution?
          <br />
          <div className="space_cont_pg" />
          <Heading>Enrol in foundation batches at an early stage</Heading>
          <br />
          <div className="space_cont_pg" />
          Students aiming to crack the NEET or JEE now favour signing up with a
          foundation course during or after the whole classes eleven and 12.
          However, it’s miles recommended to begin early from class 7th and
          experience the advantages of the course. However what is a foundation
          Course exactly? And how will it help prepare for the IITJEE or NEET?
          <br />
          <div className="space_cont_pg" />
          <Heading>What is a Foundation Batch?</Heading>
          <br />
          <div className="space_cont_pg" />
          To inculcate early getting to know and fortify the bottom in every
          concern, many institutes in India have begun foundation batches. The
          students from classes 8th/ 9th/ t10th can join through the
          application. It especially makes a speciality of clearing & building a
          strong command of science and Mathematics required for the IITJEE &
          NEET exams.
          <br />
          <div className="space_cont_pg" />
          Those programs make certain that each student can have conceptual
          readability and impeccable information of the given subjects through
          supplementing and increasing their expertise obtained in faculty. They
          behaviour daily & weekly checks wherein the questions are framed in
          this sort of manner to evaluate their conceptual know-how.
          <br />
          <div className="space_cont_pg" />
          vThe program’s emphasis is on idea-primarily based learning to pitch
          students’ interests within the issue. So, the students carry out
          properly in school as well as shine in various aggressive exams like
          JEE, NEET, Olympiad tests, and so on.
          <br />
          <div className="space_cont_pg" />
          <Heading>Significance of Foundation Program for JEE & NEET</Heading>
          <br />
          <div className="space_cont_pg" />
          In case you are nevertheless considering whether or not to begin your
          preparations early with the Foundation Course, reading these benefits
          will assist you with a manual. Take a glance:
          <br />
          <div className="space_cont_pg" />
          <Heading>1. Improve Your Competitive Capabilities</Heading>
          <br />
          <div className="space_cont_pg" />
          Being an aspirant, you might understand that the maximum essential
          thing to take note of at the same time as taking competitive exams is
          none aside from time management. Your general overall performance
          depends on how faster you may attempt questions and solve them. That
          is something that a basic course allows you to with.
          <br />
          <div className="space_cont_pg" />
          Beginning early with this application helps you preserve up with the
          principles quicker and solve questions in the least time. Also,
          enrolling in a foundation path prepares your thoughts to think
          logically, connect concepts, evaluate the application of formulas, and
          resolve equations. And once the mind is skilled to perform that way,
          it facilitates you in lots of approaches.
          <br />
          <div className="space_cont_pg" />
          <Heading>2. Strengthen the Basic Concepts</Heading>
          <br />
          <div className="space_cont_pg" />
          This happens with maximum students evaporating their primary
          principles gradually whilst shifting from one magnificence to the
          other after which struggling to regain or recognize related
          principles. The foundation route for JEE and NEET prepares you for the
          middle of the simple principles first after which movements beforehand
          with strengthening superior concepts.
          <br />
          <div className="space_cont_pg" />
          These foundation publications aim to make your basic concepts sturdy
          so that you ought to join & follow them in solving associated
          equations.
          <br />
          <div className="space_cont_pg" />
          <Heading>3. Brings Clarity To Exam Pattern</Heading>
          <br />
          <div className="space_cont_pg" />
          Becoming a member of a foundation route for JEE or NEET no longer best
          helps you build a sturdy concept base but also develops your
          understanding approximately the exam sample of these aggressive exams.
          You’ll get to know & learn vital topics that carry greater weightage
          or scoring ones. This course complements the abilities required to
          clear IITJEE or NEET.
          <br />
          <div className="space_cont_pg" />
          Furthermore, the examination patterns of college exams and competitive
          assessments are completely distinct. College sample makes a speciality
          of mastering standards at the same time as aggressive tests awareness
          on making use of those ideas.
        </>
      )
    },
    {
      id: 7,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/best-neet-coaching-in-Pimple-Saudagar-1170x576-1.png',
      content: (
        <>
          A lot of us face concentration problems and whinge about not being
          capable of concentrating on the same thing while studying. These are a
          few steps that will let you give attention to your studies.
          <br />
          <div className="space_cont_pg" />
          To begin with, limit your distractions. For an instance, preserve your
          cell phone away whilst studying. Do not try and multitask. Analyzing
          at the same time as looking at tv or while taking note of tune will
          affect your consistency and will make it tough with a view to listen.
          Limit social media usage. It could appear like it does not distract
          you but instead lets you refresh. This is not real. It distracts the
          most. You open your account for a couple of minutes however think
          about it the entire day.
          <br />
          <div className="space_cont_pg" />
          Additionally, discover a suitable environment and vicinity to study.
          Pick out your look location wisely. Keep in mind that on every
          occasion you are reading, you inform your family or roommates that
          you’re going to study and you are not to be disturbed.
          <br />
          <div className="space_cont_pg" /> Make a to-do list for your everyday
          agenda. Divide your studies into smaller parts so that it appears
          clean and potential. If we see a number of paintings piled up then we
          get demotivated without difficulty. However, if we divide our
          paintings into smaller quantities then it will become a whole lot
          simpler to cover the syllabus. It’ll provide a sense of
          accomplishment. (Best neet coaching in pimple saudagar)
          <br />
          <div className="space_cont_pg" />
          Make a proper timetable for your everyday research. Determine an area
          for analyzing distinctive topics. This manner it’s going to make your
          body recurring to look at for that many hours. This could keep away
          from plenty of stress.
          <br />
          <div className="space_cont_pg" />
          Devour wholesome food. Take small meals so that you don’t sense sleepy
          because of eating an excessive amount. Drink enough water to hold
          yourself hydrated. Choose snacks in order to provide you with
          electricity as opposed to those in order to make you lethargic. Again,
          that is in which making plans for your observation time can make a
          massive distinction. (Best neet coaching in pimple saudagar)
          <br />
          <div className="space_cont_pg" />
          Take small breaks in between each examination consultation. This can
          preserve your mind clean and you’ll learn easily and therefore can
          listen better. Our brain isn’t made for studying continuously. Observe
          for 45 min after which take a small break. Your destruction ought to
          now not be made bigger for more than 10-15 minutes.
          <br />
          <div className="space_cont_pg" />
          Keep Visiting Asquare Classes one of the Best NEET Coaching in Pimple
          Saudagar!!
        </>
      )
    },
    {
      id: 8,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/iit-jee-classes-pimpri-chinchwad.png',
      content: (
        <>
          Each year, the JEE (Joint front examination) exam is carried out by
          using the NTA (National testing agency) to provide aspirants admission
          to numerous engineering faculties in India. The exam is held in
          phases: JEE Mains & Advanced. To appear for the JEE Advanced, one must
          clear the JEE Mains first. If a candidate successfully cracks both
          levels of the exam, they could secure a seat at a number of the top &
          prestigious IITs in India. For that, you need the best IIT JEE Classes
          <br />
          <div className="space_cont_pg" />
          <Heading>
            IITJEE have a look at the Plan and guidance approach
          </Heading>
          <br />
          <div className="space_cont_pg" />
          For a time period, most students used to suppose that the most
          effective studying is to study for maximum hours goes to help them
          clean one of the maximum hard front assessments in India ie. IIT JEE.
          But the scenario is converting. IITJEE aspirants these days are
          preferring smarter approaches to studying & masking the difficulty. To
          clear the JEE Advanced 2024, all aspirants need to prepare a clever
          strategic examination plan. Though the exam isn’t easy, it is able to
          be cracked with efficient time management and techniques.
          <br />
          <div className="space_cont_pg" />
          Right here are the pinnacle JEE 2024 training hints that each IIT
          scholar needs to undertake to gain better marks in the approaching
          examination. Take a look:
          <br />
          <div className="space_cont_pg" />
          <Heading>Remedy As Many Numerical Questions As Possible</Heading>
          <br />
          <div className="space_cont_pg" />
          JEE Advanced 2024 is designed to test IIT aspirants’ comprehension,
          reasoning and logical & analytical questioning abilities. Furthermore,
          the questions asked in the exam are from the subjects like Physics,
          Chemistry & mathematics and are of superior level, focusing on the
          implication of the standards as opposed to theoretical
          rationalization. For this reason, fixing numerous numerical problems
          is the simplest manner to get maintenance of the exam.
          <br />
          <div className="space_cont_pg" />
          <Heading>Solve JEE Advanced Last Year’s Question Papers</Heading>
          <br />
          <div className="space_cont_pg" />
          This is one of the best, most clever and most commonplace examination
          instruction tips not handiest for IITJEE but additionally for some
          other country-wide-stage front exams like NEET and so on. This is due
          to the fact fixing previous years’ question papers helps students get
          an insight into the examination pattern in addition to the level &
          type of questions requested within the exam. Plus, it also permits
          students to improve their velocity to attempt questions.
          <br />
          <div className="space_cont_pg" />
          <Heading>Get Hold of the Syllabus</Heading>
          <br />
          <div className="space_cont_pg" />
          Go to the official website of JEE. Download the syllabus & recognize
          it very well. It will assist you to learn many critical insights
          approximately treasured subjects, path goals, exam patterns, marking
          schemes, and different information to be able to in addition assist
          with examination practice. IIT JEE Classes
          <br />
          <div className="space_cont_pg" />
          <Heading>Develop a subject-wise Study Plan</Heading>
          <br />
          <div className="space_cont_pg" />
          Different students have extraordinary mind tiers in a selection of
          topics. For instance, a few college students are exact in Physics even
          as a few are masters in mathematics or want assistance in Chemistry.
          To address all these problems, developing a topic-smart have a look at
          plan is the simplest idea. Make an observation plan consisting of each
          problem you want guidance on or are having problems with and study
          consequently. IIT JEE Classes
          <br />
          <div className="space_cont_pg" />
          <Heading>Choose The Right Study Material</Heading>
          <br />
          <div className="space_cont_pg" />
          Your JEE advanced 2024 practice starts off-evolved with deciding on
          the proper & excellent examine material and here, NCERT books are the
          saviour. These books will assist you to beef up your foundation. Plus,
          for added studies, several books are to be had in the market, but
          referring to conventional books is what is extra crucial. IIT JEE
          Classes
          <br />
          <div className="space_cont_pg" />
          <Heading>Create a Revision Strategy</Heading>
          <br />
          <div className="space_cont_pg" />
          The best making of a study plan is not enough. Frequently performing a
          revision is likewise equally critical till the exam. It’s by far one
          of the maximum important IITJEE toppers take a look at the
          recommendations. It has many advantages inclusive of, you may be able
          to memorize the principles for longer or you will have sufficient time
          to clear your doubts with teachers before the examination.
        </>
      )
    },
    {
      id: 9,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/medical-coaching-classes-1170x576-1-768x378.png',
      content: (
        <>
          <br />
          <div className="space_cont_pg" />
          <Heading>Things to know after Qualifying NEET Exam</Heading>
          <br />
          <div className="space_cont_pg" />
          Each Year, lakhs of students aspire to end up doctors. However, just a
          few get into MBBS courses in India. So, getting an MBBS path is an
          exceptional competitive technique. Over 18 lakh students compete every
          year to secure a seat in medical colleges in India. Step one for
          candidates seeking MBBS admission is qualifying for the NEET. (Medical
          Coaching Classes)
          <br />
          <div className="space_cont_pg" /> After qualifying for the NEET
          examination, there are a lot of factors a scholar needs to realize to
          get into medical university just as the university cutoff, college
          rating, counselling, and extra. On this blog, we are able to speak
          about the whole thing in detail approximately getting admission to
          Medical college after qualifying for NEET.
          <br />
          <div className="space_cont_pg" />
          Let’s begin our discussion approximately Admission to medical
          university After Qualifying for NEET with no delay!
          <br />
          <div className="space_cont_pg" />
          <Heading>What After NEET Exam?</Heading>
          <br />
          <div className="space_cont_pg" />
          1. Calculate the NEET Score Students can use this formula to calculate
          their NEET score:
          <br />
          <div className="space_cont_pg" />
          Total Marks = (Number of correct answers)x4 – (Number of incorrect
          answers)x1
          <br />
          <div className="space_cont_pg" />
          2. Predict NEET Rank
          <br />
          <div className="space_cont_pg" />
          Use the total marks that you acquire from the above and expect ranks
          as in keeping with marks with preceding trends
          <br />
          <div className="space_cont_pg" />
          <Heading>What After Qualifying the NEET exam?</Heading>
          <br />
          <div className="space_cont_pg" />
          Candidates who qualify for the NEET examination could be eligible to
          participate in the counselling manner on the national, state, and AIQ
          levels. The NTA will bring together a list of NEET-UG-qualified
          applicants. Students should register at the MCC portal to participate
          in the counselling and seat allocation system. (Medical Coaching
          Classes)
          <br />
          <div className="space_cont_pg" /> The NEET counselling can be
          performed via MCC for 15% of the All India Quota, deemed/central
          universities/AFMS, and ESIC institutes. So, In the course of the MBBS
          counselling procedure, college students ought to be updated with
          NEET-associated statistics, pay the counselling fee, and fill out
          their path and college alternatives. Relying on the options stuffed
          through applicants, NEET AIR, reservation standards, and seat matrix,
          MCC will behaviour the NEET UG seat allotment. Candidates who’re given
          seats at some point of MBBS admission seat allotment need to document
          to the allocated institute.
          <br />
          <div className="space_cont_pg" />
          <Heading>NEET UG Counselling</Heading>
          <br />
          <div className="space_cont_pg" />
          Eligibility for NEET 2022 Counselling
          <br />
          <div className="space_cont_pg" /> &#8658; All applicants who clear the
          NEET exam will be eligible to apply for NEET counselling.
          <br />
          <div className="space_cont_pg" /> &#8658; Below AIQ, the ministry/MCC
          publishes an appropriate listing of certified applicants.
          <br />
          <div className="space_cont_pg" /> &#8658; There are kinds of
          eligibility criteria: standard standards and standards particular to
          vital universities.
          <br />
          <div className="space_cont_pg" /> &#8658; Applicants from specific
          categories have specific general NEET eligibility standards, such as
          the minimum percentage required. (Medical Coaching Classes)
          <br />
          <div className="space_cont_pg" /> &#8658; A candidate within the
          preferred category has to have a NEET rating of at least 50%. To be
          eligible for NEET counselling, General-PWD candidates should score
          45%, even SC/ST/OBC candidates should score 40%.
          <br />
          <div className="space_cont_pg" />
          <Heading>Documents Required for NEET Counselling</Heading>
          <br />
          <div className="space_cont_pg" />
          The listing of files that candidates must convey with them whilst
          reporting to their allotted college or institute for seat affirmation
          at some stage in NEET counselling is supplied underneath. Please
          ensure you’ve got each the originals and printouts of these documents
          with you.
          <br />
          <div className="space_cont_pg" /> &#8658; NEET Admit Card 2022
          <br />
          <div className="space_cont_pg" /> &#8658; NEET 2022 Result Card
          <br />
          <div className="space_cont_pg" /> &#8658; Class 10 Mark sheet and
          certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Class 12 Mark sheet and
          certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Certificate of Birth
          <br />
          <div className="space_cont_pg" /> &#8658; ID Proof
          <br />
          <div className="space_cont_pg" /> &#8658; Caste Certificate
          <br />
          <div className="space_cont_pg" /> &#8658; Around 6-8 passport-size
          photographs
          <br />
          <div className="space_cont_pg" /> &#8658; Provisional Allotment Letter
        </>
      )
    }
  ];

  //
  const data_title = [
    {
      id: 1,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-classes-in-pimple-Saudagar-1170x576-1-1024x504.png',
      tag: 'Medical',
      title: 'NEET Practice Strategy for Repeaters',
      paragraph:
        'NEET examination is so tough it is not important that you’ll clean it in a single attempt.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-practice-strategy-for-repeaters'
    },
    {
      id: 2,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/NEET-Repeater-Classes.png',
      tag: 'Medical',
      title: 'NEET Repeater: Five Reasons to Take a Drop Year',
      paragraph:
        'After the Declaration of NEET Result, There are Three classes of students: (1) one who qualified for NEET and enrol',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-repeater-five-reasons-to-take-a-drop-year'
    },
    {
      id: 3,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/JEE-Coaching-in-Pimple-Saudagar.jpg',
      tag: 'Engineering',
      title: 'The way to Improve your JEE Score',
      paragraph:
        'The joint entrance examination or JEE is an entrance examination this is conducted by the National Testing Agency each year.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/the-way-to-improve-your-jee-score'
    },
    {
      id: 4,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-institute.png',
      tag: 'Medical',
      title: 'A way to be Inspired for the Duration of NEET and JEE Practice?',
      paragraph:
        'Each Year, lakhs of students aspire to end up doctors. However, just a few get into MBBS courses in India.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to:
        '/blog/a-way-to-be-inspired-for-the-duration-of-neet-and-jee-practice'
    },
    {
      id: 5,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/neet-repeater.jpg',
      tag: 'Medical',
      title: 'NEET-UG Preparation Strategy for NEET Repeaters & Droppers',
      paragraph:
        'NEET-UG is one of the most complicated tests in India. With every passing year, the exam is getting more difficult.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/neet-ug-preparation-strategy-for-neet-repeaters-droppers'
    },
    {
      id: 6,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/foundation.jpg',
      tag: 'Foundation',
      title: 'Importance of Foundation Course for JEE/NEET',
      paragraph:
        'In case you are aiming to crack the national-level competitive entrance exam like JEE or NEET, it’s understood that you',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/importance-of-foundation-course-for-jee-neet'
    },
    {
      id: 7,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/best-neet-coaching-in-Pimple-Saudagar-1170x576-1-1024x504.png',
      tag: 'Medical',
      title: 'Way of Preparation for the NEET Exam',
      paragraph:
        'A lot of us face concentration problems and whinge about not being capable of concentrating on the same thing while',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/top-preparation-tips-for-iit-jee-aspirants'
    },
    {
      id: 8,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/iit-jee-classes-pimpri-chinchwad.png',
      tag: 'Engineering',
      title: 'Top Preparation Tips for IIT JEE Aspirants',
      paragraph:
        'Each year, the JEE (Joint front examination) exam is carried out by using the NTA (National testing agency) to provide.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to: '/blog/way-of-preparation-for-the-neet-exam'
    },
    {
      id: 9,
      img: 'https://asquareclasses.mywebsite.show/wp-content/uploads/2023/06/medical-coaching-classes-1170x576-1-1024x504.png',
      tag: 'Medical',
      title:
        'Understand the way to Get into Medical College After Qualifying NEET Exam',
      paragraph:
        'Things to know after Qualifying NEET Exam Each Year, lakhs of students aspire to end up doctors.',
      creator_img: 'https://i.ibb.co/DR0Qvsd/amit.png',
      creator_name: 'Amit Anupam',
      post_date: '20 Jan, 2024',
      link_to:
        '/blog/understand-the-way-to-get-into-medical-college-after-qualifying-neet-exam'
    }
  ];

  return (
    <div className="content_pg_div">
      <div className="a_u_conatiner">
        <div className="a_u_conatiner_left">
          <div
            ref={viewRef1}
            className={`section ${inView1 ? 'title_aaa about_us_title' : ''}`}
          >
            <span className="block_aaa"></span>
            <h3>
              Blog<span></span>
            </h3>
          </div>
          <p className="subtitle">Blog / {data_title[data - 1].tag}</p>
          <p className="t2">{data_title[data - 1].post_date}</p>
        </div>
        <div className="a_u_conatiner_right a_u_conatiner_right_b_h">
          <img src={img} alt="img" />
        </div>
      </div>
      <img
        src={data_content[data - 1].img}
        alt="image"
        className="img_cont_pg"
      />
      <div className="cont_pgd_cont2">
        <div className="content_pgd_p1">
          <div className="t2 cont_cont_pg">{data_content[data - 1].content}</div>
        </div>
        <div className="content_pgd_p2">
          <Form2 />
          <div className="cont_pgd2_container">
            <Link
              to={data_title[7].link_to}
              style={{ textDecoration: 'none' }}
              key={data_title[7].id}
              onClick={scrollToTop}
            >
              <div className="blog_pg_card">
                <div className="blog_pg_card__header">
                  <img
                    src={data_title[7].img}
                    alt="image"
                    className="blog_pg_card__image"
                    width="600"
                  />
                </div>
                <div className="blog_pg_card__body">
                  <span className="t3 blog_pg_tag">{data_title[7].tag}</span>
                  <h4 style={{ color: 'black' }}>{data_title[7].title}</h4>
                  <p className="t4" style={{ color: 'rgb(128, 128, 128)' }}>
                    {data_title[7].paragraph}
                  </p>
                </div>
                <div className="blog_pg_card__footer">
                  <img
                    src={data_title[7].creator_img}
                    alt="image"
                    className="blog_pg_user__image"
                  />
                  <div className="blog_pg_user__info">
                    <h5 className="t3" style={{ color: 'black' }}>
                      {data_title[7].creator_name}
                    </h5>
                    <small className="t4" style={{ color: 'black' }}>
                      {data_title[7].post_date}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={data_title[8].link_to}
              style={{ textDecoration: 'none' }}
              key={data_title[8].id}
              onClick={scrollToTop}
            >
              <div className="blog_pg_card">
                <div className="blog_pg_card__header">
                  <img
                    src={data_title[8].img}
                    alt="image"
                    className="blog_pg_card__image"
                    width="600"
                  />
                </div>
                <div className="blog_pg_card__body">
                  <span className="t3 blog_pg_tag">{data_title[8].tag}</span>
                  <h4 style={{ color: 'black' }}>{data_title[8].title}</h4>
                  <p className="t4" style={{ color: 'rgb(128, 128, 128)' }}>
                    {data_title[8].paragraph}
                  </p>
                </div>
                <div className="blog_pg_card__footer">
                  <img
                    src={data_title[8].creator_img}
                    alt="image"
                    className="blog_pg_user__image"
                  />
                  <div className="blog_pg_user__info">
                    <h5 className="t3" style={{ color: 'black' }}>
                      {data_title[8].creator_name}
                    </h5>
                    <small className="t4" style={{ color: 'black' }}>
                      {data_title[8].post_date}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content_pg;
