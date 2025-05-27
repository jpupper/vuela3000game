@echo off
setlocal enabledelayedexpansion
set count=0

for /f "delims=" %%f in ('dir /b /a-d /o:n *.png') do (
    set /a count+=1
    ren "%%f" "!count!.PNG"
)

echo Renaming complete.
pause