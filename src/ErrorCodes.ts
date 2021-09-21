/*
 * Copyright (c) 2021 Tobias Hegemann
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const ErrorCodes = {
    InvalidCredentials: 'Invalid credentials',
    MissingAuthorization: 'Missing authorization',
    InvalidAuthorization: 'Invalid authorization',
    InvalidPassword: 'Invalid password',
    StageNotFound: 'Not found',
    GroupIdMissing: 'Group ID missing',
    NotMemberOfStage: 'Not member of stage',
    NoRouterAvailable: 'No router available',
    MissingTypeOfDevice: 'Missing type of device',
    MaxMembersReached: 'No more members possible, max of 30 reached',
    StageIsAlreadyFullyServed: 'Stage is already fully served',
    NoPrivileges: 'No privileges',
}
export type ErrorCode = keyof typeof ErrorCodes
export { ErrorCodes }
