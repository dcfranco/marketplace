import { useRef, useMemo, useContext } from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import { MenuContext } from '../context/Menu';

function updateHistory(hash, changeHash) {
  clearTimeout(updateHistory.timeout);
  updateHistory.timeout = setTimeout(function () {
    if (window.location.hash !== hash) {
      window.history.pushState({}, window.title, hash);
      changeHash(hash)
    }
  }, 200);
}

function useUpdateHash() {
  const elementRef = useRef()
  const { changeHash } = useContext(MenuContext)
  const myIntersectionObserver = useMemo(() => new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const hash = '#' + entry.target.id;
        updateHistory(hash, changeHash)
      }
    }
  }, {
    root: document.querySelector('main'),
    threshold: 0.5
  }), [changeHash])

  useIsomorphicLayoutEffect(() => {
    myIntersectionObserver.observe(elementRef.current)
    return () => {
      myIntersectionObserver.unobserve(elementRef.current)
    }
  }, [])

  return elementRef
}

export default useUpdateHash
