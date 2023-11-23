import { Accordion } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function AccordionSummary({ children }) {
    return (
        <Accordion.Summary
            _expanded={{
                backgroundColor: STYLE_VARIABLES.black,
                _text: {
                    fontSize: STYLE_VARIABLES.xlFontSize,
                    lineHeight: STYLE_VARIABLES.xlFontSize,
                    color: STYLE_VARIABLES.bgColor,
                    paddingLeft: 1,
                },
            }}
            _text={{
                fontSize: STYLE_VARIABLES.xlFontSize,
                lineHeight: STYLE_VARIABLES.xlFontSize,
            }}
        >
            {children}
        </Accordion.Summary>
    );
}
