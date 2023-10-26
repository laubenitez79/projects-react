import {describe, it, expect, beforeEach} from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { Router } from './Router.jsx'

describe('Router', () => {
    beforeEach(() => {
        cleanup
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })
})