// Copied from http://localhost:8081/api/v1/sources
const SOURCE_DATA = {
  "sources": [
    {
      "add_star_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/add_star",
      "interaction_count": 6,
      "is_flagged": false,
      "is_starred": false,
      "journalist_designation": "liquefied panic",
      "key": {
        "fingerprint": "E646E04EAE2F0FFE04E0173946EC5B3379011AE0",
        "public": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: E646 E04E AE2F 0FFE 04E0  1739 46EC 5B33 7901 1AE0\nComment: Source Key <4Y6YQAIPOIPABVZJEP5XWM7QBXDSI2Z3LHSGN5P7FQA\n\nxsFNBFGRxNABEADQMLuDMelTffpb8QFoBHs6AqUIYCjq9MtbpSESshRRdgJJr2do\nvWzJkhGOhrAwVW50TUCwCDi4yhR0GrNslHG6h+ufHhA1kMYkB9pFgKPFwV0BFZtx\ngSYlJCKTkMMx4JEG6AYeQd2FU1mRd+FOjIW27wWDnySTSjBptzVJq0kSi7fXGEtD\nX4hHResIuV6MYL3g+phMUSjRnj2UzpY2EWWrO8LJ/gMZhc3reJzT1xkKkpr3sawc\nmkriv6GikB2XF+RXa5oN4eoLhK23F9ksLRbDuUWytw+F1yLvMOivrXrRMt9oxW1o\noVMz9UgEOacgrOZlSu+xDjhPLilSDCe4sAtqnLwCMTFAmuOTz3SlBRILxhRmk/GI\nqN5fmAgMi8bQvGcHfgdx3m52OuxvXG3gHM23xyGQBNI2q/344waKHT8kBsOhPApB\nTgn84uypBDLhrUlvNs7EoDNS1XD2kF6GfrW/KhAcJ3H4dj8NqSSXIft53BOYqhfb\n/jkOHP3yt2Qtr7nXF8cCRJyBvvDiWjXaLT831PgzqXXBOopVoJwy82SJ+iQEIobC\neXfnr+CQrnEekA+MkqAqCck6UvsiJajl6sXgjej61z+n4ruPjRqV2I9dAfA6VQ8E\nvIn9AvlmOf+XObdyjEebKRIIL9pGFwMay/c5/z+o1C4BtT2x9TsKC4E+8wARAQAB\nwsHJBB8BCgB9BYJRkcTQAwsJBwkQRuxbM3kBGuBHFAAAAAAAHgAgc2FsdEBub3Rh\ndGlvbnMuc2VxdW9pYS1wZ3Aub3Jnv76GjE54MUv6iZHku68Qbukz9AkxgOZmPdjC\nKDokvHcDFQoIApsBAh4BFiEE5kbgTq4vD/4E4Bc5RuxbM3kBGuAAAD23D/9OJOYi\nZLVT/GyZ6UqFDXMsLKKQyOGox98z/l0qPJ/0hH5WzTiQpRS4BR4xFJV2R/S0xqfE\nCXZOq/H0HYRXTiTcfqL/xxSNTgvh+MU3Y0Lo5ajXgW4x3OYylFN1zJa04yld5VjK\nBq7lxM8ljvYc/7bpLetiHfiePRM/ZxPNgnu1gWMaOBLzyr5wi0DKLPrga+1KwRkP\n5ZJMa2dTJNe0jWdYDkRBj+LWv0mjS/w+aVLz5Qtef6PzPynvfMeTbvPM72YkStpi\nfM6Mgxux3SGpoE7FVDHxt+3Kbmf2yqCzc98ngTB6ZWCsET4iNiSpsD4C1IQFjqC4\nFkN4f3w8RzxRjpDsJRRPwARIf+qvBd5OuM+/hcVknkkajF7b0fgCBmNbynZ52/3t\nWNNHwhNqt/4uXd14YzYUD1O+VnBOEbJaHiutdqnHUpZr/l7ApZnAZr/Efz/TlIox\nfycabIJoaDHobDjw/EzDGoWnmzgis7IEMcfvehBtbtULxmsyGkhSj0R8gQRpM8FP\nBOJlpl0J/CW+30+L5yN/m3Y/1eXBw/W0DUBc5G4JLAydq0A2lJfM0/oxrk3zt4+S\nAoAtIRhph3rk4yFrWJlKTrLEn0P5lYT2wMrttAc1W3bedp9UuR6Nzfys0ChVea3x\n9+3NjawEL1tGlYXlxBVSsgmyaoh9XyHnVLzU2s11U291cmNlIEtleSA8NFk2WVFB\nSVBPSVBBQlZaSkVQNVhXTTdRQlhEU0kyWjNMSFNHTjVQN0ZRQUFRRVdBTFZLSjJP\nUDRFRFRSSVlCVkg3UEVQTlpIS1hSNTc1NTdaNERRNktNTjVaSURVUVhGR0haR0VC\nQT0+wsHMBBMBCgCABYJRkcTQAwsJBwkQRuxbM3kBGuBHFAAAAAAAHgAgc2FsdEBu\nb3RhdGlvbnMuc2VxdW9pYS1wZ3Aub3Jnevi7Etb4PVnej9s96RX6kTHuuETwwVW4\nBxsDEcp6q+YDFQoIApkBApsBAh4BFiEE5kbgTq4vD/4E4Bc5RuxbM3kBGuAAAH0S\nD/42qSTuqX07aw+HcFsqXFrHmrtafeNI5FW24pJnPVKLrsuW43N3/sT4QU+HZz0+\nN0Qdal4m2oK5NkKvhkaCafwA6MEFiFN+s6Vx5OngH4dNjR81jNtEsWqFZr9fQ1S4\n2NHYvlW2qMwmvJOvtNb2kaLC0pJ+QzZ15HYS52g5KHeZMoRw2ju2BObVcgUxbNZg\njx4zhejeN3LiD3RmaiiGcWEvuQi2hrnZkq6tqEYLCRJENMB/ihiM+QjnM5+90pEB\nNJJov/bm1XNINdSISWQAN+iapR9p8qPOFF8SIag2KyooxPTu1+V7jrIRiFqIhvQZ\nGtQntWycyl6p7t/BiJ0oah3TuiJqV6d59e5D0APO17I8cvkAsy88r8tGFcFSC4sg\n22C2/d/vWsVvDNlrz8DqLK89u+hXCqZ+twj7czbmLCBwY9zCoQE5JWAKlbTj4YsL\nLKtTstgNktsANwhurGkHMitZJcYFaCi1HYLoY1ZQ6R26P4yofX6dsElazgjlFPdO\nJxSh4LFfd72qaym9olAyshBKIpCbxe0dOrWzFTStc3QJ4LXirmnlVH58kJ6b3EZo\nbE8sy5D9/1IuSpO2Mx9n3vIvWqZ0hW7P021qErSw4t7PwAG0cbxkYW6c4ipyzghR\nq16cexqLvy9l0Pa/lcN/hIsCKwk/QTUPh48vzorAYqVJDc7BTQRRkcTQARAAq+fj\nc7BRpEqCmtuaq3/nPCspwSSMD/nr/u4O07Ze4A1Kqk44e83Vmg4zsgBDO4W0Twxf\nuOdWPEbyJpIu/ATOcqe9rSdpNza5bOeesA5PAp4Iw6nB5f6E/4kfyUqb3QEDqJNC\n+h3waqsKHC3WR7rHlKKz4Q5ERfa75O6LqE2d/BAjlWDsxpaRLYvRoaBEptPBSurR\nfq968+26SdwPGHzVMDCmwR89la05BLn3K9uNQkmCZisr2ASH1vHyALytGYekBSuR\nMpdFAssHFoIJZKAtrEuSv4GxhKk9urmN/RMOloc3vWK9o5XIxuxlUSiYz2W0CCTN\n59M21vesOo8Hib5hzwOYIEd4ZE+s5lkN7XawjtKcURq9j0q/vgxjo9xW5vMfhAbT\nuRjZPMHvGgEm5mLEuCHnL/d9vk4tMmr/Y/PliNRp5izN8buzhwdwWCcfMMQRPJnI\nl/lz1hojCVOt0Hsq0qklYBYLo64Q37iYNEPYPuVEFij5L7XWJhLlnIkpel0BzUCw\na12q6MZHqIhD109Isq8fyqn0XPFC76Rvq3DbFOh7p53blvJS1aBj3OUjeBc645N/\nRJO0ms0orCFYY3HvAvkHjGEjpwQ3RYXoJMuYTy0UtIUyRv/geDNt24womW9XR97d\nHGAyAjflIZNcm+rjlMcITJf3c03jqf6Ns1g9700AEQEAAcLBvgQYAQoAcgWCUZHE\n0AkQRuxbM3kBGuBHFAAAAAAAHgAgc2FsdEBub3RhdGlvbnMuc2VxdW9pYS1wZ3Au\nb3JnxR/FApj/qCEaa06uN+d06Qvm2RC8vp9lS4bqNNhrf8ACmwgWIQTmRuBOri8P\n/gTgFzlG7FszeQEa4AAA0o0P/1lYWGHy09UOSnd6JYE3m4UwIZJG4muVRqMqdQbe\nvV48GW916Z/UtL7LbFzqmb2pHjmFdlmL1hUljKJYK2t1Dyf+Xn50uCYp7H1V98yo\nNVIM/Zaty8R56daFVm4Dguf4UrOb6P7hbUygQi88VrCU1n8sSCy7KR65IYgOe6lk\nFSPEl/kz0cKkOAxIokEdM1sNCme2RWuAU4gzz/eJHBK7Yo0aPvWDjyd+eGNJXlEz\n53pepAeNi/omwIi/itZtP7hWDorHWjqT3A/B3dUufGxrcVuYKT6KTbim+zjfRLym\nvPAiyPi0x6SncERVH2xlCDK746jjLmD49LmfmPoXG8T8mAAwowXZzAJ2RhQco3JJ\nQDoO8XrhRUTC4pfaegcOPPqUBC5werbmISnl/6d78g+2P2wy4/9G4ZWJnLKi5VTW\nrpoc7OBxS6iEPFvJ12PCqPIFHDC/pbxfsBOHANFpuimhxAbX4GBlAc/am05uKIF+\nTMwd6viSyyWz6LQ9bG11CmhH6V4l7F3vaHB3B95T0ecdOHMWTDCneW97LC5GS1L2\n+SbqDKEPFr5DgZ8C4I5CHJhp53EKs2WT+7E/mfXIbmYqyfwXY/ocd+LAKSHVNmjC\nm5t2vsfl84ewDxlzLCpBlQCfSb3KRbKWFb8uwDraoChLZZTIAt4Lpnv8OCNBx1e4\n5MhE\n=+S/J\n-----END PGP PUBLIC KEY BLOCK-----\n",
        "type": "PGP"
      },
      "last_updated": "2025-05-23T18:05:58.090720",
      "number_of_documents": 2,
      "number_of_messages": 2,
      "remove_star_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/remove_star",
      "replies_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/replies",
      "submissions_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions",
      "url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7",
      "uuid": "d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7"
    },
    {
      "add_star_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/add_star",
      "interaction_count": 6,
      "is_flagged": false,
      "is_starred": false,
      "journalist_designation": "countrywide analogy",
      "key": {
        "fingerprint": "1F0DF50D8E03BE2317893F2F051E56A4A16FBD59",
        "public": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: 1F0D F50D 8E03 BE23 1789  3F2F 051E 56A4 A16F BD59\nComment: Source Key <GP6BRB4YT2E7XCFP3DEO2732J2NCXPTUUZQAQOQR6NT\n\nxsFNBFGRxNABEADvbdEw5i3zYubGLAAXqQ4Lk0a4pOgRomUDTeIlJkPpcddUVaXO\n5ppS7CssZR/gDY7cBoX9n1VslgVMtovb/MpjKRi68BACiIaC1fRpfGYB7qAmEK0M\n2USToCRUwN/0L3B010j36sMC/QFgOg713nRDgfAZmaMJHOLsTe8rqPeTMTWwGIwo\nmsAqD6WQKYH3CBod5XkYtaymzvlZZreHr0yCwFtcyRqi4HXNsWD74YMwq798H0m5\nA/72N0O/ofoT2SXoPc2OCDa/KtHpnxSP3CRmBmL4JW7byW0IG9tmYkxNXzHRPGrs\nuT3Sna9lLqlmYdEd/R1xTBJH9E8WUKg42DK94E2EfD1Osvg7X3MB2+Bc1S86xcno\nat9rHOrhc6xtB2PjMpZPDajeM6jVS/uNmoYZKXCjHNpA4sqKWVtIoROo6EoaO3tn\nLk+uoqJQqmrf9gfbj8zIki29WKmRpuAWW87AQSnd6mxtvmOK6oW/YsGWXbyUkBYu\nxfQCbZG06zatDRcrDQPa2L2xA60Na2MTkWtCxOBXvR4bdOI+diWiZSqZ+wAz5/YZ\nkdTJGBzL+lt6Wi0DDyfyQJbW4m5DCvc3jFDXEr1g4+2P78WChA3rfQABEa7gKYMD\noeZaoxua5mjtZjGriKRWUHO40nE3rQbup6QzE403jX7bLqS+j/Icu+y5qwARAQAB\nwsHJBB8BCgB9BYJRkcTQAwsJBwkQBR5WpKFvvVlHFAAAAAAAHgAgc2FsdEBub3Rh\ndGlvbnMuc2VxdW9pYS1wZ3Aub3JnrcZivG+XJDbuuDPOlH3cfacZ0i7DDuc0dkO6\nKAi4yE4DFQoIApsBAh4BFiEEHw31DY4DviMXiT8vBR5WpKFvvVkAAHjaD/9njBtQ\nrDW/BPhpKVuDYH9CzlSAK3a8/boMQFDiMHuOlBMKAdMf84/jq9VbJeRMjf5N1rHQ\nr+O2CYufXQf9/Coc8HlAS0i/QaSCuvbvbBb2hlxNQzoOdfFpggOSMx43yfjtFzk1\nwbzKNrUENnXm7FOaTOZSipDy66i9M2etkoHwmFDEdBftAM94lbYiRSbSbHyj0LHK\nbNSGXFK66EY/41XCotKsSDoyzrP+j93yXPsar5j3ZBYx9C1S3vCefxjQfgG42WEU\nCUUVGUbiGfYfxktmw2O+0Lu3IHF18Xl+9G8ZROEUMsBXL5QqIYXQxZ//C4NVS263\nxHL2IuCx3MaH6wsHqwparDRcOTGksFKZbZW9kNdCkyxo1UuRMOwarfiL/VvjuuQJ\n/9JMPEDc0gxFHWCGv4Iht94vGjd1Q+Ka0jaeOQDbxLPebgK5a7RUWGxnJj/A9hYk\nQLrqd97YCdegY4He4x6EhvnI4uucdqmKSkR1q6AIZrQWwWZgl1aAUXWupRQPbzgv\nGeYEiofObaSq6DNgx6oDyr8aJTIP/oguRHMMDlfhaCnNxGlIcMRaGl5/qLaEi2rl\nZuf44jK2dPmcNIjbo6XZh1a/2vGfk8Z0+PqrkUdbbcJ2s0U8/NVJXPUuPKmhlV+S\nO9SCwOeVKTk1eOYn4DZ6qyNO8pPwTJ0+h6bn3M11U291cmNlIEtleSA8R1A2QlJC\nNFlUMkU3WENGUDNERU8yNzMySjJOQ1hQVFVVWlFBUU9RUjZOVExWRUVYSEhXR0RI\nRkpVRTVSWFNZQzJUT0FNVkZOSFBCUUhOVFZHRkRXWkIzN0NMQVNNQ0YzREtQUk5C\nST0+wsHMBBMBCgCABYJRkcTQAwsJBwkQBR5WpKFvvVlHFAAAAAAAHgAgc2FsdEBu\nb3RhdGlvbnMuc2VxdW9pYS1wZ3Aub3JnxenUUv3scx5tvz3TeYV0RRb/63offeSN\nMlSJxyPVilQDFQoIApkBApsBAh4BFiEEHw31DY4DviMXiT8vBR5WpKFvvVkAAHfo\nEACN3EXwLKoRPogJzbOL4GuXgkPfI6oatFtjd8HW/OINt0NhRNYrdH5ypovgJCHA\n25Da5jX2LkUmrvK0EHODdXEk7gSlTVQ2kL1ibVdwFfj9PO448SED5U+SIUSdYLxc\nFY51V5marh0b5Tp/c0la5pnyaIsfiZHX7j3PErEsYDNEcdN4BlECOzpRvaDEJMX5\n3rpVYDSBwZGCcxhTOkdAs9Czwrljnh2gUJY8AmMT3esHLXvz8aSgk9KfypSiHqGw\nR/YFLIvgCZzTAEYLivtdaYseA3qq5Vpx+4CwUI4+Lia2+YY6b35+2/JK3Q2hwtNR\n4P+h2Prms7fglSJ2XogPxG1dpQHBxvnTTkq4pJ4mlEWfAJBcsujv554RbRoAf6bF\nFbFHDUA+gT2EVElhiMqBVFE9/K0ENb0dGhPITskzuuCFt7DSgZdLrTQU6WCYpXkV\nRdOMsNDRHe3D5MTfl2ZzI8s7P7Sh5C2hfM7zbLRzCWSwqBQQKLzRah134tLaX+wA\nyiIV0Aql63yZPu00GMXpD3Xae6wdGtIdjkaD4e2lmxzwmnMZA+SveZ5yeoOihlNx\nTCCz6+RInsak+WE9PSstJ1EhiRad48EFredGx4DMOKufAt5np/Jfr08hR3xw7wd/\n1PdUN2v/v0tXZuu/Vp+1WqT4xBfnFrRilIkefNlrTiQ3QM7BTQRRkcTQARAAnIwy\nH0c5lvBLWy8/9svLbwaiTkXuc/C7tZ+4T49pQfSmhYIh1hc9vS0TLOBSp/0KMqbo\nM11Dr3eXA0aGh8kuvc/k6PEoa+nVR3elhAgmQypMdmehkVwRYeSj/9vayPBonMDa\naLt8x11eAv3W6r4iW3CN7gPNxLuZ6HMTNRc6O4jziDoZqVTiLaJLT3wJ847xecg3\nDmF6rDKZPknunfkyKN+IaMhdzP7htdpsEEhjenXN6mvCNFZ2DhhWDQwBVLZt13kI\nBDycpLNDBw33nk7OhXo5y0DO1h68ordY0eqELBHHSLKZCRii01P1GVOQhsXwPzeO\njR8BSXESxygAje2Svi4lC1fCO1QKlhWk29BdJtSjZvgYyQImEpLMxBE0Lm+52/GB\nKQerKcW1O5Q7VkQMtEWQCLAr34b12fxWQxJggJngorknqDW5cRPo1qD4KUj1GH6w\n0aLIBTf+Kqym9A8KJxwYFZIzMleRbEJLNH8aoz58bOZ1Xi4vsvs2gkn4tHngrzvT\nD1PCDNAhbzPMrO/z9HQ/bfuf76BTFaXP6BWJWnJEH5zwSURV/9U2ReAs2upr86uE\nvFWn6/t2bQElnIXUi4gy+TNiP1YgQgHE53vQAUid+FzDXnJ3qBnrcwZsvBs7K/WR\nQI64qCAa7kZ6qgF+0b99updeHSyQ/VMUPASWm1MAEQEAAcLBvgQYAQoAcgWCUZHE\n0AkQBR5WpKFvvVlHFAAAAAAAHgAgc2FsdEBub3RhdGlvbnMuc2VxdW9pYS1wZ3Au\nb3JnxMvdGKNE+/D42uSQraL8ytQGfnGMOnjmxrwvp87YKXICmwgWIQQfDfUNjgO+\nIxeJPy8FHlakoW+9WQAAQooQANFeQKTNE/tg0IdDBAzJEqXn9uzfCaPn8Ebv/ur+\nmw/cjcIq4KYcpiUybCMJ7VDHToTL8VvTccJaD/CtUwwFU+hQeJNBm8TwiM9LAxis\nW3AhADK6DBrg4epIBylK69vbCWs/Mt3MuSX6MSYXC3n7lksB20nR5DmJsl1dPsUL\nIy3pcyRN3JY4WCMD3LglWJK0ylvzMS3aHA5c+viQSXiAFCfxvbaBIxo7oYKR8EfX\nfr+4Nw7/XyLAMVSW0acCoEPdb3uLBn3tfOCW9vCwr/+v3Zsnkm2KT0TR4bUOF6LX\njXQqMF/IsSr6YZTFLfJSl80N2igNd3UU2QPCrfcyuBOdgsBHPxjzjIkpc7YIB0/D\nOBN3db1Tzx45HVYHiJr0S1AHwyESft5siilZEW47ArXuJ5d6jVzSOt8iSAg0LbN4\nrd5tqsj7W9mM3IpqssAqcKOmf8rbm8uh3MLB+0Bl7yQ+8889F28GmfMiJWfsIfyK\nS5b4vA8GKFUbSaimE9kIzVEEkfHGS9caT3ZDRe2Wq6AxNta6ExkYPd5wSd61wX9u\nGwqHbGCpdvebd2+c5tKRrZiPsiA7PaukfHgJ8flzhQSHcAQ+/7lRn0WEncQbQ9CG\nYeJMuDEm3GlWLZ3/2S1HT3+FYJ7SHA/LyTT421fOO3XqOUTDuOhPX47UAb2dLlUF\nTo+N\n=qtJP\n-----END PGP PUBLIC KEY BLOCK-----\n",
        "type": "PGP"
      },
      "last_updated": "2025-05-23T18:06:01.141467",
      "number_of_documents": 2,
      "number_of_messages": 2,
      "remove_star_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/remove_star",
      "replies_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/replies",
      "submissions_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions",
      "url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491",
      "uuid": "a57ed2e8-f7ab-429d-9c16-fcdb0216b491"
    },
    {
      "add_star_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/add_star",
      "interaction_count": 6,
      "is_flagged": false,
      "is_starred": false,
      "journalist_designation": "fluorescent suspicion",
      "key": {
        "fingerprint": "26D90CE001E12D7E703EDD6A6CCEC4B95FA0A3F9",
        "public": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: 26D9 0CE0 01E1 2D7E 703E  DD6A 6CCE C4B9 5FA0 A3F9\nComment: Source Key <3BAWRVIJRPOGJKMKXCIPPZNNI3BPV5SJAWHEKNJNFS7\n\nxsFNBFGRxNABEADPClmTa2DCkxVrzJul0Gm2bcD02AtgPaPQ9V9h57NCaNMTUlUJ\nAF28O3QenTZvf25O1lFWYNFMrJxSogDaknrl8V+13Xq3MNNyZ7++UQatSVv/1u5F\nJcLhEGGD749m6EGuiRIU9FYsmg5w4I3Ze6v3IZ5lQSwSsEX6de9HnyyW37lEbR5Q\nr7SMQkYiwX/KuDc7Qy4EHopS3stvLRRZO6ttxr4F0IAeEfsNVCqfIyZ4HVtJtXu0\njLiZqA0NT6A96rPaLHL7F7Rd2QsbldLeWQxAinKasp0nfC6zNTNF9f5uv+L7URsM\nawFegMJvgRWvKDxptc4j1V8o4xG56OwWbWGozgbBUaq63p2Bgwnl1TeyHwVpLQbU\nzeLCWzkA00AYM3zaPgb2Ul5E2AXnfs3boty1LvCIm1e4bBohK8qh+gKMQ+zBBxN1\nSJKdscZojnwNfnMZFt358vqK9unwMvQwjidiBxoduzPU356OZoHHyTD5P3+Fz8Ne\n1hj+MTrO+xZ9ijOT+wUYxy9h8N+IjpLGHYBXe283uQ4fJ5XDQlp8Xk8PC0HYaMKb\nKmyjP8dRSPW2SgB4xf6Rb6TAFI+Iz/vsrR+IySQMqwr7E19Tp0YReNUSUqdV1cdw\nnawIiOLlWgvB7jgCKfgCoEVzV5U06cLNYkyJKqCRmkEU4eygLpNYGhJ8nQARAQAB\nwsHJBB8BCgB9BYJRkcTQAwsJBwkQbM7EuV+go/lHFAAAAAAAHgAgc2FsdEBub3Rh\ndGlvbnMuc2VxdW9pYS1wZ3Aub3JntBcY+tNKyyFmuG3H/ILRaVG9q+3PT7dPhkXD\n52D4NusDFQoIApsBAh4BFiEEJtkM4AHhLX5wPt1qbM7EuV+go/kAANriEACTUPoi\nmHUMyMvLiJVH+QShx8rWbNgcDYMbTARKh3qxhwsW65mCxAp7EsPvv9jQ5pUHTGlk\nKNUtt0YHaS/10VeKyuhnyhVZirfjGaX2RftxXVPns9+bhEbqUfuWOa91XSqneKAo\nj6N59RmTRmlUG3/SMPq6rgeWo2MhKlYhCs8H/Gt8A8HI2zG7YuytbrANU/Qma+MY\nYDB1c/jikB4vtCMws56dNTXbga9BLLqIS+TF63HPqtAKwaMKHtZ0nUC183eaUyya\nxlEG9J/3Oaoe1nY1M601TOGXXyXpTSmfsSapBvdY2xA3NUvg5qGpbG8cpRVqfo/m\nbMEMyIoKQED7vA1d+0XIwH29RernChazOmcMi3JhwjvDl1Efk+xkgwvtpcPeP3F8\ny+tDvOytbslQrLA0qVbYAEi1na22C32bZRS9dYsXhKOe8DU6AkVn4n9TBBwitec/\ns/hN+9lD25za8LgjcaLaYCrVRwh6lwusqbQYVXV4uAYSJweUtI6wtfDCrPK7yhI0\n5fSlwOVLSiLGquvrkriWsSltcY1aG7gI+vjvf0PiJDr8WlBERPGAWON6hDOuvrCk\n1XJyufQ0/z6IepQofTzIVIIpw1O/BdsJGK0p6W6SJPr+BODOtpuB78FYvC4OpFF4\n0w48AtixC33t09UzwjG4+o2BkQAKXTVBhJ4Mec11U291cmNlIEtleSA8M0JBV1JW\nSUpSUE9HSktNS1hDSVBQWk5OSTNCUFY1U0pBV0hFS05KTkZTN040Q0VKN1RHSDRC\nVFhaTlI0NlVRN0cyMjVUTVJOSVpaSFlYRDNJMlNYN1FTTktCWVRLVFdVNVNWRjZH\nQT0+wsHMBBMBCgCABYJRkcTQAwsJBwkQbM7EuV+go/lHFAAAAAAAHgAgc2FsdEBu\nb3RhdGlvbnMuc2VxdW9pYS1wZ3Aub3JnasewaS5sbS+8yTRBJgjA2XAtMX45hg5F\nqY0PbSVNsogDFQoIApkBApsBAh4BFiEEJtkM4AHhLX5wPt1qbM7EuV+go/kAAEp2\nEAC+3vo7fYFCgy37K9Q+6/Lar/rM0NrUjLMrDIBf8ceCkTJzO0nPoLrBgMDPW/mM\nSSquqOtrW63deaf7y389CBEf+TytKFr+eMfI+5Jc0VPqpR7KrGKuuS30eNIlHOcS\nmppAh45A/0xl5pNE6Uz9Z6UiZyfcU3VcMut5NRsmo9vUzzDzKmYzmBWcDmf/7AMD\nAs2YUdrA93HymfU+HRYhzaiLM60oxint+86WsbBDchRn9+H/jJsHr5u4Blm19zJ/\nVjZaRceDBNrD1nZZHAKk/64VlFZE1I3ywcw+wVqIdWDZF8+S5wvAkH6v/DaTjmL+\nHcNUl5WLdJmF8rMHKkeWxZFYPdX41u4WUlLKYv2WCjWjSrT66/F3gIZgOxRVKOqP\nNI1IybJ/So/AomN3cXKmWEgd3rMBhSBwPL7kFCPdKmsG7SElxyqfFZFLLmKbWZO+\nikseRQXRsDqr5Ep+Cg6IdfrN5S/HvcLCcSmEyICeOxAuYSVleEwjdyerPdtLPxOo\nTbHOYJ9nVhNhJs0DENbt/TNH2IxjRTsWzww3zE0wg6MWU0DcJMEA22o4XYCp/wkX\nq/TBCSk17RrfFMD55oL8hA2fPVMcPVSjiIfiUhc1O2oV8Qv4E9+qxrNxFP7uY1eI\nAHz2m3pqEN6KKsT9QMFTnDVKEbesP+awjq5ujA60+qA5rc7BTQRRkcTQARAAyc2v\njGr7jhkEk+JZkGT2HLj+BgPO9+CD/UEzbPt6yVSltMi/Mq9O1+c1PG4zXYQ5q5fs\naKQ5HQ7bh3mBE1mQDW4+P1dlt80eN8NcwfmBYZ1Lx+K8Z/iNvysURgGDGwJKazri\nR9UwEot9v1XRm3ifXpcF8D//DCNem9IcHKsnNkGDLk+z6G/TdLoAcVF7AElDNrMZ\n3w0QAEVoVtZkCGcD3bwg4ff/RSXc3DjpQCZi4Su7EyKaeakg+IYAl8sUNPgkXQrO\nYaOV7pDS/3udcmpFliSLI1TTCVjtnBc8BiXtkundXPAlVv6Yt71laR7lLKHowQUM\nK2Xgjr3KIvYoCQgyEQeggEB2MO1HqX8teoPb4wyyVQ5pA4QIzpQv/E9Z1DYPbRYE\nTv+dpXFLTEhoj4KKIxV6UalK1aoSBaLY6zkJ3qUgWhtEdJMPlSfyAEZ3oD7SFlKx\nFS+5W82vAIt7Tc3ti9hlXaB4+1126rfpky6bIokG4UlM2AOGeLfsJRlJ7Es0xKXx\nW3RE1NY42FicAeq6uLfQ27b80LvpRusO+ZqwvpqZvsxJVECA3j8S40X2mdqGREo0\nQ4UGtUPLIGBvQAlUq2mVcvNK2PI5vOM9Kb5/uwzYVGxP99CB/fzEDHDpO7X/zkCy\nvyxJJWKRdnjSn6V0j5lgHvGdyxG3FqVdCipev6sAEQEAAcLBvgQYAQoAcgWCUZHE\n0AkQbM7EuV+go/lHFAAAAAAAHgAgc2FsdEBub3RhdGlvbnMuc2VxdW9pYS1wZ3Au\nb3JnsDLP5Pd9/961SuaVHStxABEE8/nVgOHzVgKtmAi3oW4CmwgWIQQm2QzgAeEt\nfnA+3WpszsS5X6Cj+QAAzKIP/RZCKE+O5wjI19OjzUpB5M6uT2abua0k/dOQAA5r\n2q/gzfhKPyyW9THRyUPSuG4/HDk3nPIA2UOY+ac8BWYOTlxoZLdT67jH0Z6Et1sY\n5zu9etGQpMbHW/XSVr8/8TKAYjZWO8rl+LuSj3XOAOyEH5lwRahSsY7UtJuyZpU1\n4beDnkNVNX77CSi8AQ38a8KuEMGeOm/3P1RsGWcSoO6vURIN1tmK5a8i8JysMru8\n7uS2L5iZta3HhEUPu1siFOoYUl1M4ioCOFRAQb+XN01RE2Sf9nZ8yU/vQ1cQnA5+\nhB86vjf+X6LM5HF90T6elC3SLJTa2C07XC8CEEwcGrdkOsmqliWBIzGqmzQ+erIO\nIZMgGooJRKpzUYKeGOQtsHAazjGagP6+XDitNe/OMXcNASF0ihW0HIn/ps5putOg\nj6fyk1IM4FCVLm6pjoQSf0DnefICJY/oYd9D4kR0AW9CQQDiDpLjJR5ArWOYeLzb\nUHVuMeQ4NZ1wbaNWCW+IIvxceLQ0/F/z43D0VZjlLXziZ6orWVJyD/YlhEU7CbX2\nbAC59x6mjWQWZzBCyIN/Ck7W6dwhPjIlw3IM6HbsAehSq8Ba/XZFewC/AFjl+ypR\nu3ed0eGn+1RE12VHm+/q7m3qcac9x97gTnMcnctdFxargD8I2fza1m+304qT0rFe\nygTm\n=fh+f\n-----END PGP PUBLIC KEY BLOCK-----\n",
        "type": "PGP"
      },
      "last_updated": "2025-05-23T18:06:03.621442",
      "number_of_documents": 2,
      "number_of_messages": 2,
      "remove_star_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/remove_star",
      "replies_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/replies",
      "submissions_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions",
      "url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8",
      "uuid": "73302ab1-1767-4ddf-b4a0-43d3939b30d8"
    }
  ]
};

// Copied from http://localhost:8081/api/v1/submissions
const SUBMISSION_DATA = {
  "submissions": [
    {
      "download_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/ca2f5b42-8950-4fb3-9afb-c1afef1108c8/download",
      "filename": "1-liquefied_panic-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": true,
      "seen_by": [
        "a841cc90-9c76-44c4-b172-89f9e7f23d41"
      ],
      "size": 616,
      "source_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7",
      "submission_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/ca2f5b42-8950-4fb3-9afb-c1afef1108c8",
      "uuid": "ca2f5b42-8950-4fb3-9afb-c1afef1108c8"
    },
    {
      "download_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/48f64b1d-65de-4f15-9fbf-1dec6484dea4/download",
      "filename": "2-liquefied_panic-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": true,
      "seen_by": [
        "770ea9cb-20f6-4e42-862c-f879dfca6524"
      ],
      "size": 700,
      "source_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7",
      "submission_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/48f64b1d-65de-4f15-9fbf-1dec6484dea4",
      "uuid": "48f64b1d-65de-4f15-9fbf-1dec6484dea4"
    },
    {
      "download_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/552b4944-bd99-45b5-b242-e5814f7b9189/download",
      "filename": "3-liquefied_panic-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": true,
      "seen_by": [
        "770ea9cb-20f6-4e42-862c-f879dfca6524"
      ],
      "size": 650,
      "source_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7",
      "submission_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/552b4944-bd99-45b5-b242-e5814f7b9189",
      "uuid": "552b4944-bd99-45b5-b242-e5814f7b9189"
    },
    {
      "download_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/ac9b7436-3777-440f-ad17-64d3aeeb0137/download",
      "filename": "4-liquefied_panic-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": true,
      "seen_by": [
        "770ea9cb-20f6-4e42-862c-f879dfca6524"
      ],
      "size": 650,
      "source_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7",
      "submission_url": "/api/v1/sources/d0e8a1ad-a05c-4377-9b91-8009a3bcf3b7/submissions/ac9b7436-3777-440f-ad17-64d3aeeb0137",
      "uuid": "ac9b7436-3777-440f-ad17-64d3aeeb0137"
    },
    {
      "download_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/36d2f474-85e7-4d7f-9496-81a186224fca/download",
      "filename": "1-countrywide_analogy-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": true,
      "seen_by": [
        "a841cc90-9c76-44c4-b172-89f9e7f23d41"
      ],
      "size": 647,
      "source_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491",
      "submission_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/36d2f474-85e7-4d7f-9496-81a186224fca",
      "uuid": "36d2f474-85e7-4d7f-9496-81a186224fca"
    },
    {
      "download_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/4848ad29-b50a-4f1c-a113-4f41340d1c2d/download",
      "filename": "2-countrywide_analogy-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": true,
      "seen_by": [
        "770ea9cb-20f6-4e42-862c-f879dfca6524"
      ],
      "size": 766,
      "source_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491",
      "submission_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/4848ad29-b50a-4f1c-a113-4f41340d1c2d",
      "uuid": "4848ad29-b50a-4f1c-a113-4f41340d1c2d"
    },
    {
      "download_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/0f73ef40-5149-44e0-b7d4-04b46bb1f930/download",
      "filename": "3-countrywide_analogy-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": true,
      "seen_by": [
        "b0b702a9-ce91-47f6-b500-af7e52775b97"
      ],
      "size": 650,
      "source_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491",
      "submission_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/0f73ef40-5149-44e0-b7d4-04b46bb1f930",
      "uuid": "0f73ef40-5149-44e0-b7d4-04b46bb1f930"
    },
    {
      "download_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/2152a508-0641-4ca6-89c7-1653a4a334d4/download",
      "filename": "4-countrywide_analogy-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": true,
      "seen_by": [
        "770ea9cb-20f6-4e42-862c-f879dfca6524"
      ],
      "size": 650,
      "source_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491",
      "submission_url": "/api/v1/sources/a57ed2e8-f7ab-429d-9c16-fcdb0216b491/submissions/2152a508-0641-4ca6-89c7-1653a4a334d4",
      "uuid": "2152a508-0641-4ca6-89c7-1653a4a334d4"
    },
    {
      "download_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/dc240b9a-98cc-4cbd-b384-677c9d8db405/download",
      "filename": "1-fluorescent_suspicion-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": false,
      "seen_by": [],
      "size": 804,
      "source_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8",
      "submission_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/dc240b9a-98cc-4cbd-b384-677c9d8db405",
      "uuid": "dc240b9a-98cc-4cbd-b384-677c9d8db405"
    },
    {
      "download_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/69bc86a9-4c8b-4d47-984a-5069cc7eed6d/download",
      "filename": "2-fluorescent_suspicion-msg.gpg",
      "is_file": false,
      "is_message": true,
      "is_read": false,
      "seen_by": [],
      "size": 710,
      "source_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8",
      "submission_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/69bc86a9-4c8b-4d47-984a-5069cc7eed6d",
      "uuid": "69bc86a9-4c8b-4d47-984a-5069cc7eed6d"
    },
    {
      "download_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/ca2f8104-1ff2-4f7c-8023-01775c6b1ff8/download",
      "filename": "3-fluorescent_suspicion-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": false,
      "seen_by": [],
      "size": 650,
      "source_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8",
      "submission_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/ca2f8104-1ff2-4f7c-8023-01775c6b1ff8",
      "uuid": "ca2f8104-1ff2-4f7c-8023-01775c6b1ff8"
    },
    {
      "download_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/8c728601-828a-4d0e-8b14-c104fe37dd62/download",
      "filename": "4-fluorescent_suspicion-doc.gz.gpg",
      "is_file": true,
      "is_message": false,
      "is_read": false,
      "seen_by": [],
      "size": 650,
      "source_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8",
      "submission_url": "/api/v1/sources/73302ab1-1767-4ddf-b4a0-43d3939b30d8/submissions/8c728601-828a-4d0e-8b14-c104fe37dd62",
      "uuid": "8c728601-828a-4d0e-8b14-c104fe37dd62"
    }
  ]
};

export default { sources: SOURCE_DATA.sources, submissions: SUBMISSION_DATA.submissions };
