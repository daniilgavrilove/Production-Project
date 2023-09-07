import type { StoryContext,Story } from '@storybook/react';

export const ThemeDecorator = (Story:Story,context:StoryContext) => {
    let {scheme} = context.globals


    if (scheme === 'light'){
        return(
            <div className={`app light`}>
                <Story />
            </div>
        )
    }
    if (scheme === 'dark'){
        return(
            <div className={`app dark`}>
                <Story />
            </div>
        )
    }
    return(
        <div >
        <div className={`app light`}>
            <Story />
        </div>
    <div className={`app dark`}>
        <Story />
    </div>
        </div>

    )
}



