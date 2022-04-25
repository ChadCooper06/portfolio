import React from "react";
import { Accordion } from "react-bootstrap";

export default function January22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #1: Week1! (1/26/22)</Accordion.Header>
          <Accordion.Body>
            <p>
             Week 1
                During this first week I have been introduced to the basics of Git, GitHub, GitPods and using the 
                Terminal on my Mac to practice and write code. The challenges have not been numerous or difficult 
                to overcome, yet, but I am positive that I will hit roadblocks over the coming weeks and months.
                This first week has been a very good introduction to the difficulties that will lie ahead and I am 
                sure that I will become more and more challenged (which is what I''m hoping will happen as I love solving problems/puzzles).

                Some questions regarding this first week and thoughts on it;
            </p>
            <h4>Was my first week what I expected?</h4> 
                <p>This first week was much more fun than I had assumed it would be and I enjoyed learning how to use GitHub/GitPod/GitPages. 
                   I still have more learning to do with them but it''s been the right amount of difficulty for a first week.
                </p>

            <h4>What am I eager or excited to learn?</h4> 
                <p>Right now, I am eager and excited to keep progressing through all of the introductory information and begin to get 
                   better and become slightly more capable. In the future, I am excited to learn a couple languages that can help me 
                   make beautiful and functional code.
                </p>

            <h4>What is something that can be learned about me simply by reading this blog?</h4> 
                <p>The most obvious thing is that can be divined about me from this blog (as it continues along), is that I enjoy challenges 
                    and I am not afraid to ask for help when I need it. I like to learn so I enjoy being nudged towards the answer. 
                    I also try to be a helpful person whenever the opportunity arrises.
                    *As an aside, I may mention my cat a bit too often LOL*
                </p>
           
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
