import React from 'react'
import PageLayout from 'components/page-layout/PageLayout'

import About from './about/About'
import Social from './social/Social'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

const MainPage: React.FC = () => {
    return (
        <PageLayout>
            <>
                <About/>
                <Social/>
                <Projects/>
                <Skills/>
            </>
        </PageLayout>
    )
}

export default MainPage
