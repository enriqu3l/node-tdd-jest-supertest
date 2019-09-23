const authenticate = require('./authenticate')

describe('Middlewares', () => {
    describe('authenticate', () => {
        it('Should have id 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("1")
            }
            const res = {
                sendStatus: jest.fn()
            }
            const next = jest.fn()

            authenticate(req, res, next)

            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])

            //Validar que no se llame sendStatus
            expect(res.sendStatus.mock.calls).toEqual([])

            //Validar que si se llame Next
            expect(next.mock.calls).toEqual([
                []
            ])
        })
        it('Should fail if user is not 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("2")
            }
            const res = {
                sendStatus: jest.fn()
            }
            const next = jest.fn()

            authenticate(req, res, next)

            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            expect(res.sendStatus.mock.calls).toEqual([
                [403]
            ])

            //Validar que no se llame a Next
            expect(next.mock.calls).toEqual([])
        })
    })

})