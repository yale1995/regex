Annotations class 08

group 01 -> (<(\w+)[\s\S]*?>)
\w only text
+ repeatable
[\s\S] line break and texts
* repeatable
? optionally

group 02 -> (\w+)
\w only text
+ repeatable

group 03 -> ([\s\S]*?)
[\s\S] line break and texts
* repeatable
? optionally

group 03 -> (<\/\2>)
\2 mention to second group

Attention: to set like unreusable group -> (?:)



