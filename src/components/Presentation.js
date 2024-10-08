// src/components/Presentation.js
import React from "react";
import styled from "styled-components";

const PresentationWrapper = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #2c3e50;
  font-size: 2.5rem;
`;

const Subtitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 12px;
  color: #34495e;
  font-size: 1.75rem;
`;

const Text = styled.p`
  margin-bottom: 16px;
  color: #7f8c8d;
  line-height: 1.8;
  font-size: 1.125rem;
`;

const HighlightedText = styled.span`
  color: #2980b9;
  font-weight: bold;
`;

function Presentation() {
  return (
    <PresentationWrapper>
      <Title>Leveraging Incident Reporting for Business Growth</Title>

      <Text>
        As our startup continues to grow, so too do the challenges we face. However, these
        challenges present opportunities for us to demonstrate our commitment to transparency,
        responsiveness, and continuous improvement.
      </Text>

      <Subtitle>Why Transparency Matters</Subtitle>
      <Text>
        By openly acknowledging issues as they arise, we build trust with our clients. They can see
        that we are aware of the problems and are actively working to resolve them. This not only
        buys us time to implement solutions but also strengthens our relationships with our clients.
      </Text>

      <Subtitle>Controlling the Narrative</Subtitle>
      <Text>
        Providing clients with timely and accurate information allows us to control the narrative
        around issues. Rather than being caught off guard by unexpected problems, clients are kept
        informed of our progress and the steps we are taking to ensure their satisfaction.
      </Text>

      <Subtitle>Turning Challenges into Marketing Opportunities</Subtitle>
      <Text>
        Incident reporting doesn’t just serve an operational purpose; it can also be leveraged for
        marketing. For example, we can transform our transparency into a blog post on LinkedIn,
        highlighting our growth, the challenges we’ve overcome, and our commitment to improving our
        services. This kind of content can enhance our brand’s reputation and attract potential
        clients who value honesty and resilience.
      </Text>

      <Subtitle>Persistent Issues: Proactive Communication</Subtitle>
      <Text>
        In cases where an issue is persistent, we can take our transparency a step further by
        proactively sending <HighlightedText>email notifications</HighlightedText> to our users.
        These emails can provide updates on the service status and reassure clients that we are
        actively working to resolve the problem. This not only keeps users informed but also shows
        that we value their experience and are committed to maintaining high service standards.
      </Text>

      <Subtitle>Example Incident Report</Subtitle>
      <Text>
        On August 28, 2024, between 1:00 PM and 3:00 PM UTC, we experienced degraded system
        performance due to insufficient database memory allocation. After exploring several
        potential causes, our team identified and resolved the issue by increasing the memory cap.
        This restored normal operations, and we have since implemented monitoring improvements to
        prevent a recurrence.
      </Text>
      <Text>
        This incident showcases our ability to quickly identify and resolve issues while keeping our
        clients informed. It’s a perfect example of how transparency can be turned into a positive
        narrative.
      </Text>

      <Subtitle>Conclusion</Subtitle>
      <Text>
        By presenting this information transparently to our stakeholders, we not only demonstrate
        our commitment to solving problems but also highlight our strategic approach to managing
        client relationships. This practice will help us grow stronger as a company and can even
        serve as a valuable marketing tool.
      </Text>
    </PresentationWrapper>
  );
}

export default Presentation;
