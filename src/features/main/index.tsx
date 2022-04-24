import React from 'react'
import PageLayout from '../../layouts/page'

import About from '../../components/about'
import Social from '../../components/social'
import Projects from '../../components/projects'
import Skills from '../../components/skills'

const Main: React.FC = () => {
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

export default Main
