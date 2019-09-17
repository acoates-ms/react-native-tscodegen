
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/OBJECT_PROP_TYPES_NO_EVENTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from 'react-native-tscodegen-types';
import {Double} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_required: Readonly<{
    prop: boolean;
  }>;
  boolean_optional: Readonly<{
    prop?: WithDefault<boolean, false>;
  }>;
  string_required: Readonly<{
    prop: string;
  }>;
  string_optional: Readonly<{
    prop?: WithDefault<string, ''>;
  }>;
  double_required: Readonly<{
    prop: Double;
  }>;
  double_optional: Readonly<{
    prop?: WithDefault<Double, 0.0>;
  }>;
  float_required: Readonly<{
    prop: Float;
  }>;
  float_optional: Readonly<{
    prop?: WithDefault<Float, 0.0>;
  }>;
  int_required: Readonly<{
    prop: Int32;
  }>;
  int_optional: Readonly<{
    prop?: WithDefault<Int32, 0>;
  }>;
  enum_optional: Readonly<{
    prop?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  }>;
  image_required: Readonly<{
    prop: ImageSource;
  }>;
  image_optional_key: Readonly<{
    prop?: ImageSource;
  }>;
  image_optional_value: Readonly<{
    prop: (ReactNull | ImageSource);
  }>;
  image_optional_both: Readonly<{
    prop?: (ReactNull | ImageSource);
  }>;
  color_required: Readonly<{
    prop: ColorValue;
  }>;
  color_optional_key: Readonly<{
    prop?: ColorValue;
  }>;
  color_optional_value: Readonly<{
    prop: (ReactNull | ColorValue);
  }>;
  color_optional_both: Readonly<{
    prop?: (ReactNull | ColorValue);
  }>;
  point_required: Readonly<{
    prop: PointValue;
  }>;
  point_optional_key: Readonly<{
    prop?: PointValue;
  }>;
  point_optional_value: Readonly<{
    prop: (ReactNull | PointValue);
  }>;
  point_optional_both: Readonly<{
    prop?: (ReactNull | PointValue);
  }>;
  object_required: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  object_optional_key?: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  object_optional_value: (ReactNull | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
  object_optional_both?: (ReactNull | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


