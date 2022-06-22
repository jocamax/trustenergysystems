import { useRef, useState } from "react"
import { motion } from "framer-motion"

const Faq = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="faqs-card"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4>
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="answer-container"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p>
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "How much money will I save by puchasing Solar Systems?",
            a: "Stranica u izradi"
        },
        {
            q: "Is there guarantee for the products?",
            a: "Stranica u izradi"
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Stranica u izradi",
            a: "Stranica u izradi."
        },
        {
            q: "Question 5?",
            a: "Answer to question 5."
        }
    ]
  
    return (
        <section className="faqs-secondary">
             
              <img
                className="demo-bg"
                src="https://img.freepik.com/free-vector/active-people-bikes-windmills-house-with-solar-panel-rooftop-flat-illustration_74855-10477.jpg?w=1380&t=st=1655822357~exp=1655822957~hmac=ee11a5f640b76c71303d616426181dd7037be6225952d057a09218544322cd4d"
                alt=""
                />
                 <motion.div initial='hidden' animate='visible'
                 variants={{
                 hidden: {
                 scale: .95,
                 opacity: 0
               },
                 visible: {
                 scale:1,
                 opacity:1,
                 transition: {
                 delay: .2
          }
        }
      }}
      >
            <div className="faqs-header">
                <h1>
                    Frequently Asked Questions
                </h1>
                <p>
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            </motion.div>
            <motion.div initial='hidden' animate='visible'
                 variants={{
                 hidden: {
                 scale: .95,
                 opacity: 0
               },
                 visible: {
                 scale:1,
                 opacity:1,
                 transition: {
                 delay: .4
          }
        }
      }}
      >
            <div className="faqs-container">
                {
                    faqsList.map((item, idx) => (
                        <Faq
                            key={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
            </motion.div>
        </section>
    )
}
