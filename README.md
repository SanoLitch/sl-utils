# SL-Utils
Just simple useful functions


##Common functions

####IsNull
Checking value for null or undefined. Warning! Works weird with some types

####ReplaceNull
Replace detected null or undefined value with another, in other cases return original value

####TryParseObject
Try-catch-wrapper for JSON.parse() function, if function was executed successful return parsed json-object in other cases return original value

####GetTime
Returns current client string date-time value

####DeepCopy
Return cloned object without links with original value, use careful can works wrong with some complicated types!


####GenerateUUID
Generates pseudo-uniq UUID. Be careful, if you need really uniq value - you shouldn't use it!

##String functions

####IsString
Checks value for string type

####Strignify
Casts object to json-string, removes '\n' symbol

####StringContains
Checking for one string contains another, useful for switch-case operator

####IsEmptyStr
Checking for null, undefined or empty string value

####ReplaceEmptyStr
Replaces empty string value with another value, in other cases return original value

##Arrays functions

####IsArrayExist
Checking for null, undefined value, that have length > 0

####Flat
Makes arrays more flat, useful for arrays that contains another arrays
 
####ArraysAreEqual
Very subjective function...compares two arrays, an be useful for fast comparision of string arrays or something like that. Don't use for complicated types! Be careful with that!!!
