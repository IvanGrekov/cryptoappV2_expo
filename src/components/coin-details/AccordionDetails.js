import { Accordion, VStack } from 'native-base';

export default function AccordionDetails({ children }) {
    return (
        <Accordion.Details>
            <VStack paddingX={1}>{children}</VStack>
        </Accordion.Details>
    );
}
