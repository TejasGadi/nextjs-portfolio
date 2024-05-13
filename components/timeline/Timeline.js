import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

const Timeline = () => {
    return (
        <TimelineSection>
            <TimelineItems>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineDot></TimelineDot>
                    <TimelineDate>2017</TimelineDate>
                    <TimelineContent>
                        <h3>timeline item title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </TimelineContent>
                </TimelineItem>
            </TimelineItems>
        </TimelineSection>
    )
}

const TimelineSection = styled(motion.section)`
    background-color: #0e1123;
	max-height: 100vh;
	padding: 7rem 1.5rem;
    font-family: 'Poppins', sans-serif;
`;
const TimelineItems = styled.div`
    max-width: 70rem;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	position: relative;
    ::before{
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #2f363e;
        left: calc(50% - 1px);
    }
`;
const TimelineItem = styled.div`
    margin-bottom: 40px;
	width: 100%;
	position: relative;
    :last-child{
        margin-bottom: 0;
    }
    :nth-child(odd){
        padding-right: calc(50% + 30px);
	    text-align: right;
    }
    :nth-child(even){
        padding-left: calc(50% + 30px);
    }
`;
const TimelineDot = styled.div`
    height: 16px;
	width: 16px;
	background-color: #eaa023;
	position: absolute;
	left: calc(50% - 8px);
	border-radius: 50%;
	top: 10px;
`;
const TimelineDate = styled.div`
    font-size: 18px;
	color: #eaa023;
	margin: 6px 0 15px;
`;
const TimelineContent = styled.div`
    background-color: #2f363e;
	padding: 30px;
	border-radius: 5px;
    h3{
        font-size: 20px;
        color: #ffffff;
        margin: 0 0 10px;
        text-transform: capitalize;
        font-weight: 500;
    }
    p{
        color: #c8c8c8;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
    }
`;

export default Timeline