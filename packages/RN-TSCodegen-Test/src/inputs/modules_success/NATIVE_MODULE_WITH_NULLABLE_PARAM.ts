
// Automatically generated from modules_success/NATIVE_MODULE_WITH_NULLABLE_PARAM.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {ReactNull} from '../../lib/CodegenTypes';
import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  voidFunc(arg: (ReactNull | string)): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

