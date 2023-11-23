import { Divider as NativeDivider } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function Divider({ orientation = 'horizontal' }) {
    return (
        <NativeDivider
            orientation={orientation}
            _light={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
            _dark={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
        />
    );
}
