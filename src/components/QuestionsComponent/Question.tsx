import React, { useState } from 'react'
import { Container } from '../../theme'
import { Process } from './Process'
import {
  ListHeader,
  QuestionComponent,
  QuestionHeader,
  QuestionHeaderPart,
  QuestionList,
  QuestionListElement,
  QuestionText,
} from './style'
import questions from './question.json'

export const Question = () => {
  const [isOpen, setOpen] = useState(0)

  return (
    <QuestionComponent>
      <Container>
        <QuestionHeaderPart>
          <QuestionHeader>Ko‘p beriladidan savollar ?</QuestionHeader>
          <QuestionText isActive={true}>
            Bu yerda Imom Abu Hanifa akademiyasiga ko‘p marta, takroran beriladigan savollarga
            javoblar keltirilgan. Sizning ham biror savolingiz bo’lsa akademiya@info.uz pochtasiga
            yuboring
          </QuestionText>
        </QuestionHeaderPart>
        <QuestionList>
          {questions.questionList.map((q) => (
            <QuestionListElement onClick={() => setOpen(q.id)} key={q.id}>
              <ListHeader>{q.header} </ListHeader>
              <QuestionText isActive={q.id === isOpen} style={{ fontSize: '14px' }}>
                {q.text}
              </QuestionText>
            </QuestionListElement>
          ))}
        </QuestionList>
        <Process />
      </Container>
    </QuestionComponent>
  )
}
