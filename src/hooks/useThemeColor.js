import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useThemeColor = () => {
  const darkMode = useSelector((store) => store.app.darkMode);
  return darkMode ? 'bg-gray-500' : 'bg-transparent';
}
export const useCardColor = () => {
  const darkMode = useSelector((store) => store.app.darkMode);
  return darkMode ? 'border border-gray-600' : 'border border-gray-200';
}

export default useThemeColor
