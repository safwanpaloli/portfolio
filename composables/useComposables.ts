

export default function(){
const activeNav = "hover:text-red-700 hover:border-b hover:border-black"
const colorMode = useColorMode()

const useChangeColormode = () =>  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'

  return {
    activeNav,
    colorMode,
    useChangeColormode
  }
}