// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * @module three/HOST
 */

import Utils from 'core/Utils';
import Deferred from 'core/Deferred';
import LipsyncFeature, {DefaultVisemeMap} from 'core/LipsyncFeature';
import {env} from './HostEnvironment';
import Messenger from './Messenger';
import HostObject from './HostObject';

import aws from './awspack';
import anim from './animpack';

export default {
  /**
   * @see env
   */
  env,
  /**
   * @see Utils
   */
  Utils,
  /**
   * @see Deferred
   */
  Deferred,
  /**
   * @see three.js/Messenger
   */
  Messenger,
  /**
   * @see three.js/HostObject
   */
  HostObject,
  /**
   * @see core/LipsyncFeature
   */
  LipsyncFeature,
  /**
   * @see DefaultVisemeMap
   */
  DefaultVisemeMap,
  /**
   * @see module:three/awspack
   */
  aws,
  /**
   * @see module:three/animpack
   */
  anim,
};
