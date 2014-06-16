/*
 * This file is part of the Doodle3D project (http://doodle3d.com).
 *
 * Copyright (c) 2013-2014, Doodle3D
 * This software is licensed under the terms of the GNU GPL v2 or later.
 * See file LICENSE.txt or visit http://www.gnu.org/licenses/gpl.html for full license details.
 */

var VERTICALSHAPE;

var verticalShapes = {
  "NONE": 'none',
  "DIVERGING": 'diverging',
  "CONVERGING": 'converging',
  "SINUS": 'sinus'
};

function setVerticalShape(s) {
	VERTICALSHAPE = s;
  redrawRenderedPreview();
}

function initVerticalShapes() {
  resetVerticalShapes();
}

function resetVerticalShapes() {
  setVerticalShape(verticalShapes.NONE);
}
