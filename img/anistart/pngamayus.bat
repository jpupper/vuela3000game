@echo off
for %%i in (*.png) do (
    ren "%%i" "%%~ni.PNG"
)
echo Renaming complete.
pause