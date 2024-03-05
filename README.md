# vegas-baby
list of vegas food spots we wanna try

search function:
search each tile and isolate whichever has the letter the user is typing, in consecutive (index) order
hide everything else
when a letter is typed, the tiles that DON'T have the letter typed in their first word, and words after, hide them.
same for the letter user typed after the first letter. and so on.
if they delete a letter, reveal tiles that DO have that letter in whichever index order the input content is on
tiles should hide as a letter key is pressed.

search func: assist from chatgpt, they used 'input' as an eventlistener rather than 'keydown' eventlistener to search through tiles.
advanced js, eventlistener 'input'
