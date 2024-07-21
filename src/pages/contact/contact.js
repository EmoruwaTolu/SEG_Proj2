import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const faqs = [
    {
      question: "What are the opening hours?",
      answer: "The community center is open from 8 AM to 9 PM on weekdays and from 9 AM to 6 PM on weekends."
    },
    {
      question: "How can I become a volunteer?",
      answer: "You can become a volunteer by filling out the volunteer application form available on our website or at the community center."
    },
    {
      question: "Are there any membership fees?",
      answer: "No, membership is free for all community members."
    },
    {
      question: "Can I book facilities for private events?",
      answer: "Yes, you can book our facilities for private events. Please contact our front desk for more information and availability."
    }
    ,
    {
      question: "Where can I reach the front desk?",
      answer: "You can call us at 613-567-9000, or email us at sandyhillorg.gmail.com ."
    }
];

const Contact = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
      <div className="contact-body-container">
            <div className='top-left'></div>
            <div className='bottom-right'></div>
            <div className='contact-body'>
              <div className='frequently-asked-container'>
                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <h3 onClick={() => toggleFaq(index)}>
                                    {faq.question}
                                </h3>
                                {openIndex === index && <p>{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
              </div>
              <div className='submit-question-container'>
                  <h2 className='ask-header'>
                    Can't answer your question?
                  </h2>
                  <div className='ask-blurb'>Send it in</div>                  
                  <div className='ask-submission'>
                    <textarea type="text" label="question" placeholder="Ask away..." />
                    <button>SUBMIT</button>
                  </div>
                </div>
            </div>
      </div>
    );
}
  
export default Contact;