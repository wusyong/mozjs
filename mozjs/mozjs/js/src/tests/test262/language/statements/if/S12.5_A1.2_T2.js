// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    1, true, non-empty string and others in expression is evaluated to true
    when using operator "new"
es5id: 12.5_A1.2_T2
description: Using "if/else" construction
---*/

var c=0;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(new Number(1)))
	throw new Test262Error('#1.1: new 1 in expression is evaluated to true');
else
  c++;
if (c!=1) throw new Test262Error('#1.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(new Boolean(true)))
	throw new Test262Error('#2.1: new true in expression is evaluated to true');
else
  c++;
if (c!=2) throw new Test262Error('#2.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!(new String("1")))
	throw new Test262Error('#3.1: new "1" in expression is evaluated to true');
else
  c++;
if (c!=3) throw new Test262Error('#3.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!(new String("A")))
	throw new Test262Error('#4.1: new "A" in expression is evaluated to true');
else
  c++;
if (c!=4) throw new Test262Error('#4.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if(!(new Boolean(false)))
    throw new Test262Error('#5.1: new false in expression is evaluated to true ');
else
  c++;
if (c!=5) throw new Test262Error('#5.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(!(new Number(NaN)))
    throw new Test262Error('#6.1: new NaN in expression is evaluated to true ');
else
  c++;
if (c!=6) throw new Test262Error('#6.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if(!(new Number(null)))
  throw new Test262Error('#7.1: new null in expression is evaluated to true ');
else
  c++;
if (c!=7) throw new Test262Error('#7.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if(!(new String(undefined)))
  throw new Test262Error('#8.1: new undefined in expression is evaluated to true ');
else
  c++;
if (c!=8) throw new Test262Error('#8.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#9
if(!(new String("")))
    throw new Test262Error('#9.1: new empty string in expression is evaluated to true ');
else
  c++;
if (c!=9) throw new Test262Error('#9.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);