import React from 'react'
import ReactMarkdown from 'react-markdown'
import {BodySection, InnerTopSection, TopSection, Wrapper} from './BlogDetailStyles'

const BlogDetail = (props) => {
    const { data: { title, content } } = props
    
    console.log(content)

    return (
        <Wrapper>
            <TopSection>
                <InnerTopSection>
                    {title && <h1>{title}</h1>}
                </InnerTopSection>
            </TopSection>
            <BodySection>
                
            </BodySection>
        </Wrapper>
    )
}

export default BlogDetail
