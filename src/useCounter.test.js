import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './useCounter'

//Mark: https://www.npmjs.com/package/@testing-library/react-hooks
// As part of the changes for React 18, it has been decided that the renderHook API provided by this library will instead be included as official additions to both react-testing-library (PR) and react-native-testing-library (PR) with the intention being to provide a more cohesive and consistent implementation for our users.
test('should increment counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
        result.current.increment()
    })

    expect(result.current.count).toBe(1)
})
