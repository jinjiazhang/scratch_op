from ctypes import *
from win32com.client import Dispatch

class Op(object):
    def __init__(self):
        tools = windll.LoadLibrary("./tools.dll")
        tools.setupW("op.dll")
        self.com = Dispatch("op.opsoft")

    def Ver(self):
        return self.com.Ver()

    def SetPath(self, path):
        return self.com.SetPath(path)

    def GetPath(self):
        return self.com.GetPath()

    def GetBasePath(self):
        return self.com.GetBasePath()

    def GetID(self):
        return self.com.GetID()

    def GetLastError(self):
        return self.com.GetLastError()

    def SetShowErrorMsg(self, show_type):
        return self.com.SetShowErrorMsg(show_type)

    def Sleep(self, millseconds):
        return self.com.Sleep(millseconds)

    def InjectDll(self, process_name, dll_name):
        return self.com.InjectDll(process_name, dll_name)

    def EnablePicCache(self, enable):
        return self.com.EnablePicCache(enable)

    def CapturePre(self, file_name):
        return self.com.CapturePre(file_name)

    def SetScreenDataMode(self, mode):
        return self.com.SetScreenDataMode(mode)

    def AStarFindPath(self, mapWidth, mapHeight, disable_points, beginX, beginY, endX, endY):
        return self.com.AStarFindPath(mapWidth, mapHeight, disable_points, beginX, beginY, endX, endY)

    def FindNearestPos(self, all_pos, type, x, y):
        return self.com.FindNearestPos(all_pos, type, x, y)

    def EnumWindow(self, parent, title, class_name, filter):
        return self.com.EnumWindow(parent, title, class_name, filter)

    def EnumWindowByProcess(self, process_name, title, class_name, filter):
        return self.com.EnumWindowByProcess(process_name, title, class_name, filter)

    def EnumProcess(self, name):
        return self.com.EnumProcess(name)

    def ClientToScreen(self, ClientToScreen):
        return self.com.ClientToScreen(ClientToScreen)

    def FindWindow(self, class_name, title):
        return self.com.FindWindow(class_name, title)

    def FindWindowByProcess(self, process_name, class_name, title):
        return self.com.FindWindowByProcess(process_name, class_name, title)

    def FindWindowByProcessId(self, process_id, class_name, title):
        return self.com.FindWindowByProcessId(process_id, class_name, title)

    def FindWindowEx(self, parent, class_name, title):
        return self.com.FindWindowEx(parent, class_name, title)

    def GetClientRect(self, hwnd):
        return self.com.GetClientRect(hwnd)

    def GetClientSize(self, hwnd):
        return self.com.GetClientSize(hwnd)

    def GetForegroundFocus(self):
        return self.com.GetForegroundFocus()

    def GetForegroundWindow(self):
        return self.com.GetForegroundWindow()

    def GetMousePointWindow(self):
        return self.com.GetMousePointWindow()

    def GetPointWindow(self, x, y):
        return self.com.GetPointWindow(x, y)

    def GetProcessInfo(self, pid):
        return self.com.GetProcessInfo(pid)

    def GetSpecialWindow(self, flag):
        return self.com.GetSpecialWindow(flag)

    def GetWindow(self, hwnd, flag):
        return self.com.GetWindow(hwnd, flag)

    def GetWindowClass(self, hwnd):
        return self.com.GetWindowClass(hwnd)

    def GetWindowProcessId(self, hwnd):
        return self.com.GetWindowProcessId(hwnd)

    def GetWindowProcessPath(self, hwnd):
        return self.com.GetWindowProcessPath(hwnd)

    def GetWindowRect(self, hwnd):
        return self.com.GetWindowRect(hwnd)

    def GetWindowState(self, hwnd, flag):
        return self.com.GetWindowState(hwnd, flag)

    def GetWindowTitle(self, hwnd):
        return self.com.GetWindowTitle(hwnd)

    def MoveWindow(self, hwnd, x, y):
        return self.com.MoveWindow(hwnd, x, y)

    def ScreenToClient(self, hwnd):
        return self.com.ScreenToClient(hwnd)

    def SendPaste(self, hwnd):
        return self.com.SendPaste(hwnd)

    def SetClientSize(self, hwnd, width, hight):
        return self.com.SetClientSize(hwnd, width, hight)

    def SetWindowState(self, hwnd, flag):
        return self.com.SetWindowState(hwnd, flag)

    def SetWindowSize(self, hwnd, width, height):
        return self.com.SetWindowSize(hwnd, width, height)

    def SetWindowText(self, hwnd, title):
        return self.com.SetWindowText(hwnd, title)

    def SetWindowTransparent(self, hwnd, trans):
        return self.com.SetWindowTransparent(hwnd, trans)

    def SendString(self, hwnd, str):
        return self.com.SendString(hwnd, str)

    def SendStringIme(self, hwnd, str):
        return self.com.SendStringIme(hwnd, str)

    def RunApp(self, cmdline, mode):
        return self.com.RunApp(cmdline, mode)

    def WinExec(self, cmdline, cmdshow):
        return self.com.WinExec(cmdline, cmdshow)

    def GetCmdStr(self, cmd, millseconds):
        return self.com.GetCmdStr(cmd, millseconds)

    def BindWindow(self, hwnd, display, mouse, keypad, mode):
        return self.com.BindWindow(hwnd, display, mouse, keypad, mode)

    def UnBindWindow(self):
        return self.com.UnBindWindow()

    def GetCursorPos(self):
        return self.com.GetCursorPos()

    def MoveR(self, x, y):
        return self.com.MoveR(x, y)

    def MoveTo(self, x, y):
        return self.com.MoveTo(x, y)

    def MoveToEx(self, x, y, w, h):
        return self.com.MoveToEx(x, y, w, h)

    def LeftClick(self):
        return self.com.LeftClick()

    def LeftDoubleClick(self):
        return self.com.LeftDoubleClick()

    def LeftDown(self):
        return self.com.LeftDown()

    def LeftUp(self):
        return self.com.LeftUp()

    def MiddleClick(self):
        return self.com.MiddleClick()

    def MiddleDown(self):
        return self.com.MiddleDown()

    def MiddleUp(self):
        return self.com.MiddleUp()

    def RightClick(self):
        return self.com.RightClick()

    def RightDown(self):
        return self.com.RightDown()

    def RightUp(self):
        return self.com.RightUp()

    def WheelDown(self):
        return self.com.WheelDown()

    def WheelUp(self):
        return self.com.WheelUp()

    def GetKeyState(self, vk_code):
        return self.com.GetKeyState(vk_code)

    def KeyDown(self, vk_code):
        return self.com.KeyDown(vk_code)

    def KeyDownChar(self, vk_code):
        return self.com.KeyDownChar(vk_code)

    def KeyUp(self, vk_code):
        return self.com.KeyUp(vk_code)

    def KeyUpChar(self, vk_code):
        return self.com.KeyUpChar(vk_code)

    def WaitKey(self, vk_code, time_out):
        return self.com.WaitKey(vk_code, time_out)

    def KeyPress(self, vk_code):
        return self.com.KeyPress(vk_code)

    def KeyPressChar(self, vk_code):
        return self.com.KeyPressChar(vk_code)

    def Capture(self, x1, y1, x2, y2, file_name):
        return self.com.Capture(x1, y1, x2, y2, file_name)

    def CmpColor(self, x, y, color, sim):
        return self.com.CmpColor(x, y, color, sim)

    def FindColor(self, x1, y1, x2, y2, color, sim, dir):
        return self.com.FindColor(x1, y1, x2, y2, color, sim, dir)

    def FindColorEx(self, x1, y1, x2, y2, color, sim, dir):
        return self.com.FindColorEx(x1, y1, x2, y2, color, sim, dir)

    def FindMultiColor(self, x1, y1, x2, y2, first_color, offset_color, sim, dir):
        return self.com.FindMultiColor(x1, y1, x2, y2, first_color, offset_color, sim, dir)

    def FindMultiColorEx(self, x1, y1, x2, y2, first_color, offset_color, sim, dir):
        return self.com.FindMultiColorEx(x1, y1, x2, y2, first_color, offset_color, sim, dir)

    def FindPic(self, x1, y1, x2, y2, files, delta_color, sim, dir):
        return self.com.FindPic(x1, y1, x2, y2, files, delta_color, sim, dir)

    def FindPicEx(self, x1, y1, x2, y2, files, delta_color, sim, dir):
        return self.com.FindPicEx(x1, y1, x2, y2, files, delta_color, sim, dir)

    def FindPicExS(self, x1, y1, x2, y2, files, delta_color, sim, dir):
        return self.com.FindPicExS(x1, y1, x2, y2, files, delta_color, sim, dir)

    def FindColorBlock(self, x1, y1, x2, y2, color, sim, count, height, width):
        return self.com.FindColorBlock(x1, y1, x2, y2, color, sim, count, height, width)

    def FindColorBlockEx(self, x1, y1, x2, y2, color, sim, count, height, width):
        return self.com.FindColorBlockEx(x1, y1, x2, y2, color, sim, count, height, width)

    def GetColor(self, x, y):
        return self.com.GetColor(x, y)

    def SetDisplayInput(self, mode):
        return self.com.SetDisplayInput(mode)

    def LoadPic(self, file_name):
        return self.com.LoadPic(file_name)

    def FreePic(self, file_name):
        return self.com.FreePic(file_name)

    def LoadMemPic(self, file_name, data, size):
        return self.com.LoadMemPic(file_name, data, size)

    def GetScreenData(self, x1, y1, x2, y2):
        return self.com.GetScreenData(x1, y1, x2, y2)

    def GetScreenDataBmp(self, x1, y1, x2, y2):
        return self.com.GetScreenDataBmp(x1, y1, x2, y2)

    def GetScreenFrameInfo(self):
        return self.com.GetScreenFrameInfo()

    def MatchPicName(self, pic_name):
        return self.com.MatchPicName(pic_name)

    def SetDict(self, idx, file_name):
        return self.com.SetDict(idx, file_name)

    def SetMemDict(self, idx, data, size):
        return self.com.SetMemDict(idx, data, size)

    def UseDict(self, idx):
        return self.com.UseDict(idx)

    def Ocr(self, x1, y1, x2, y2, color, sim):
        return self.com.Ocr(x1, y1, x2, y2, color, sim)

    def OcrEx(self, x1, y1, x2, y2, color, sim):
        return self.com.OcrEx(x1, y1, x2, y2, color, sim)

    def FindStr(self, x1, y1, x2, y2, strs, color, sim):
        return self.com.FindStr(x1, y1, x2, y2, strs, color, sim)

    def FindStrEx(self, x1, y1, x2, y2, strs, color, sim):
        return self.com.FindStrEx(x1, y1, x2, y2, strs, color, sim)

    def OcrAuto(self, x1, y1, x2, y2, sim):
        return self.com.OcrAuto(x1, y1, x2, y2, sim)

    def OcrFromFile(self, file_name, color_format, sim):
        return self.com.OcrFromFile(file_name, color_format, sim)

    def OcrAutoFromFile(self, file_name, sim):
        return self.com.OcrAutoFromFile(file_name, sim)

    def FindLine(self, x1, y1, x2, y2, color, sim):
        return self.com.FindLine(x1, y1, x2, y2, color, sim)

    def WriteData(self, hwnd, address, data, size):
        return self.com.WriteData(hwnd, address, data, size)

    def ReadData(self, hwnd, address, size):
        return self.com.ReadData(hwnd, address, size)