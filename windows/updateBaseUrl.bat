@echo off
setlocal enabledelayedexpansion

set "file=../.env.production"
set "tempFile=temp.env.production"
set "newBaseUrl=%~1"

if "%newBaseUrl%"=="" (
    echo Error: Please provide the new base URL as a command line argument.
    exit /b 1
)

set "newBaseUrl=http://%newBaseUrl%:3000/api"

(for /f "tokens=1,* delims==" %%a in (%file%) do (
    if "%%a"=="VITE_REACT_APP_BASE_URL" (
        echo VITE_REACT_APP_BASE_URL=!newBaseUrl!
    ) else (
        echo %%a=%%b
    )
)) > %tempFile%

move /y %tempFile% %file%

echo .env.production file has been updated.
